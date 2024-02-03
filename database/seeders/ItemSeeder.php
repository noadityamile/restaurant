<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('items')->insert([
            [
                'name' => "Asian Fried Rice",
                'description' => "Fried Rice with seafood and beef.",
                'category_id' => 1,
                'price' => 2,
                'created_at' => Carbon::now()
            ],
            [
                'name' => "Potato Wedges",
                'description' => "Belgium potato slice with tomato sauce.",
                'category_id' => 2,
                'price' => 1,
                'created_at' => Carbon::now()
            ],
        ]);
    }
}
