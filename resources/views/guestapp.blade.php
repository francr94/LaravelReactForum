@extends('layouts.app')
@section('content')

    <div id="guestapp"></div>

    <p>Please <a href='{{ route("login") }}'>sign in</a> to view the contents of this forum and to create and participate in threads.</p>

@endsection
