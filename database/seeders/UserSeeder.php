<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $password = bcrypt('password');

        User::factory()
            ->hasTasks(3)
            ->create(['email' => 'test@test.com', 'password' => $password]);

        User::factory()
            ->hasTasks(3)
            ->create(['email' => 'test2@test.com', 'password' => $password]);
    }
}
