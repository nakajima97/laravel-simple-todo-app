<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class TaskControllerTest extends TestCase
{
    use RefreshDatabase;

    private $user;

    public function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create();
    }

    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_example()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_cant_access_task_list()
    {
        $response = $this->get('/task');

        $response->assertStatus(302);
    }

    public function test_can_access_task_list()
    {
        $response = $this->actingAs($this->user)
                         ->withSession(['banned' => false])
                         ->get('/task');

        $response->assertStatus(200);
    }

    public function test_can_add_task()
    {
        $user = User::factory()->create();

        $param = ['title' => 'test'];

        $response = $this->actingAs($this->user)
                         ->withSession(['banned' => false])
                         ->post('/task', $param);
        
        $response->assertStatus(200);
    }
}
