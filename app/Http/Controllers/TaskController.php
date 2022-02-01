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

        if (isset($request->title)) {
            return ['result' => false, 'message' => 'Invalid parameters.'];
        }

        $task = new Task;
        $task->user_id = $id;
        $task->title = $request->title;
        $task->save();

        return ['result' => true, 'message' => 'Successful !'];
    }

    public function delete(Request $request)
    {
        $id = $request->id ?? -1;
        $task = Task::find($id);

        if ($task === null) {
            return ['result' => false, 'message' => "Task don't find !"];
        }

        $task->is_deleted = true;
        $task-> save();

        return ['result' => true, 'message' => 'Task is deleted !'];
    }

    public function finish(Request $request)
    {
        $id = $request->id ?? -1;
        $task = Task::find($id);

        if ($task === null) {
            return ['result' => false, 'message' => "Task don't find !"];
        }

        $task->is_finished = true;
        $task->save();

        return ['result' => true, 'message' => 'Task is finished !'];
    }
}
