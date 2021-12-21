<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ApiController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/tcontatos',[ApiController::class,'tcontatos']);

Route::get('/econtatos',[ApiController::class,'econtatos']);

Route::post('/addcontatos',[ApiController::class,'addcontatos']);

Route::delete('/removecontato',[ApiController::class,'removecontato']);

Route::put('/alteracontato',[ApiController::class,'alteracontato']);
