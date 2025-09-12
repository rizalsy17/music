<?php
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\HomeController;

Route::get('/', function () {
    return view('welcome');
});

// Route::get('/', function () {
//     return Inertia::render('Home');
// });
use App\Http\Controllers\Auth\SignInController;

// Tampilkan form login
Route::get('/SignIn', [SignInController::class, 'showLoginForm'])->name('showLoginForm');
Route::post('/SignIn', [SignInController::class, 'login'])->name('login');
Route::post('/logout', [SignInController::class, 'logout'])->name('logout');

Route::get('/SignUp', function () {
    return Inertia::render('SignUp');
});

// Route::get('/Dashboard', function () {
//     return Inertia::render('Admin/Dashboard');
// });
Route::middleware(['auth', 'role:admin'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');
});

Route::middleware(['auth', 'role:user'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Home');
    })->name('user.dashboard');
});