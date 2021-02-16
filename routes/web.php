<?php

use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\PageController;
//Rute pagina principala
Route::get('/', [PageController::class, 'index'])->name('index');
