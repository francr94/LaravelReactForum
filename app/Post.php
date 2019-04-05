<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

	protected $fillable = ['user_id','thread_id','content'];

    public function poster() {

    	return $this->belongsTo(User::class, 'user_id');
    }

    public function thread() {

    	return $this->belongsTo(Thread::class, 'thread_id');
    }
}
