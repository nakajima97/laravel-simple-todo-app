<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function index()
    {
        $id = Auth::id();
        $tasks = User::find($id)->tasks->where('is_finished', false)->where('is_deleted', false);

        return view('task_list', ['tasks' => $tasks]);
    }

    public function store(Request $request)
    {
        $id = Auth::id();

        $task = new Task;
        $task->user_id = $id;
        $task->title = $request->title;
        $task->save();

        return ['result' => true, 'message' => '挿入成功'];
    }

    public function delete(Request $request)
    {
        $id = $request->id;
        $task = Task::find($id);
        $task->is_deleted = true;
        $task-> save();

        return ['result' => true, 'message' => 'Task is deleted !', 'task' => $task, 'id' => $id];
    }

    public function finish(Request $request)
    {
        $id = $request->id;
        $task = Task::find($id);
        $task->is_finished = true;
        $task->save();

        return ['result' => true, 'message' => 'Task is finished !'];
    }
}
