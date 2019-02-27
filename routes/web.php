<?php

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

//Route::get('/contacts', function () {
//    return view('contacts');
//});

// contacts home page
Route::get('/contacts', 'ContactsController@index')->name('contactsHomePage');

// add new contact
Route::post('/contacts/addNew', 'ContactsController@store')->name('addNewContact');