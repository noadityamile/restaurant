<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DiscountSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('discounts')->insert([
            [
                'discountable_type' => "App\Models\Category",
                'discountable_id' => 3,
                'discount_name' => "category discount",
                'scheme' => "per-category",
                'percentage' => 20
            ],
            [
                'discountable_type' => "App\Models\Item",
                'discountable_id' => 2,
                'discount_name' => "potato discount",
                'scheme' => "per-item",
                'percentage' => 5
            ],
        ]);
    }
}
