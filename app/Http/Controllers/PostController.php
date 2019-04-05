<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class PostController extends Controller
{


    public function store(Request $request) {

    	$validatedData = $request->validate([
          'content' => 'required',
          'thread' => 'required',
        ]);

        $post = Post::create([
          'user_id' => auth()->id(),
          'content' => $validatedData['content'],
          'thread_id' => $validatedData['thread']
        ]);

        return response()->json(201);
    }
}
