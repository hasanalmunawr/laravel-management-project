<?php

namespace Database\Seeders;

use App\Models\Project;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Hasan',
            'email' => 'hasan@example.com',
            'password' => bcrypt('123123123'),
            'email_verified_at' => now(),
        ]);

        Project::factory()
            ->count(50)
            ->hasTasks(30)
            ->create();
    }
}