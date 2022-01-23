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
        $task->title = $request->taskTitle;
        $task->save();

        return ['result' => true, 'message' => '挿入成功'];
    }
}
