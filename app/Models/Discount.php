<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discount extends Model
{
    use HasFactory;

    public function categories()
    {
        return $this->morphedByMany(Category::class, 'discountable');
    }

    public function items()
    {
        return $this->morphedByMany(Item::class, 'discountable');
    }
}
