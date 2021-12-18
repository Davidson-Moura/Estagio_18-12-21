<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ApiController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/tcontatos',[ApiController::class,'tcontatos']);

Route::post('/econtatos',[ApiController::class,'econtatos']);

Route::post('/addcontatos',[ApiController::class,'addcontatos']);

Route::post('/removecontato',[ApiController::class,'removecontato']);
