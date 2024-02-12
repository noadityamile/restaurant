<?php

use App\Http\Controllers\Api\Auth\LoginController;
use App\Http\Controllers\Api\Auth\LogoutController;
use App\Http\Controllers\Api\Auth\RegisterController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\DiscountController;
use App\Http\Controllers\Api\ItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('categories', CategoryController::class);
Route::resource('items', ItemController::class);
Route::resource('discounts', DiscountController::class);

Route::post('/login', LoginController::class);
Route::post('/logout', LogoutController::class)->middleware('auth:sanctum');
Route::post('/register', RegisterController::class);

