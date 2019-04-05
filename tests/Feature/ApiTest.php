<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;


class ApiTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicExample()
    {
	    $data = [
            'title' => 'testThread',
            'content' => 'This is a test',
            'section_id' => 1
        ];

        $response = $this->json('POST', '/user', $data);

        $response   
        	->assertStatus(201);
        //    ->assertJson(['Thread Created' => true]);
    }
}
