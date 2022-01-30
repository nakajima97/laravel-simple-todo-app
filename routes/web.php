<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('/task', [TaskController::class, 'index'])->middleware(['auth'])->name('task');
Route::post('/task', [TaskController::class, 'store'])->middleware(['auth'])->name('task');
Route::delete('/task', [TaskController::class, 'delete'])->middleware(['auth'])->name('task');
Route::post('/task/finish', [TaskController::class, 'finish'])->middleware(['auth'])->name('task');

require __DIR__.'/auth.php';
