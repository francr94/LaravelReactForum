<?php

use Illuminate\Database\Seeder;

class SectionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sections')->insert( array(
            array(
                'name' => 'Introductions and Announcements',
                'description' => 'Introduce yourself and view forum announcements'),
            array(
                'name' => 'PHP',
                'description' => 'Talk about the PHP language here'),
            array(
                'name' => 'Javascript',
                'description' => 'Talk about the Javascript language here'),
            array(
                'name' => 'Coding',
                'description' => 'Talk about general coding topics here'),
            array(
                'name' => 'General Discussion',
                'description' => 'Discuss anything not related to coding here'),
            )
        );
    }
}
