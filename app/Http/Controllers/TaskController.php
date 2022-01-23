<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index()
    {
        return view('task_list');
    }

    public function store(Request $request)
    {
        $task = new Task;
        $task->title = $request->title;
        $task.save();
    }
}
