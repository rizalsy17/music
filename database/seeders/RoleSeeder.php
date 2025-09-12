<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Str;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        Role::firstOrCreate(
            ['name' => 'admin', 'guard_name' => 'web'],
            ['id' => (string) Str::uuid()]
        );

        Role::firstOrCreate(
            ['name' => 'user', 'guard_name' => 'web'],
            ['id' => (string) Str::uuid()]
        );
    }
}
