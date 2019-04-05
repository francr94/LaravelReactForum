<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
		    return $request->user();
		});

Route::get('sections', 'SectionController@index');

Route::get('sections/{id}','SectionController@show');

Route::get('threads/{id}','ThreadController@show');

Route::post('threads','ThreadController@store');

Route::post('posts','PostController@store');

Route::get('user/{id}','UserController@name');