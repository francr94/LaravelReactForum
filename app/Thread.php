<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{

    protected $fillable = ['user_id','section_id','title','content'];

	public function creator() {

		return $this->belongsTo(User::class, 'user_id');
	}

	public function section() {

    	return $this->belongsTo(Section::class, 'section_id');
    }

    public function posts() {

    	return $this->hasMany(Post::class);
    }
}
