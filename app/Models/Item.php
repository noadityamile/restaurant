<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category_id',
        'price',
        'description'
    ];

    protected $appends = ['discounted_price'];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function discounts()
    {
        return $this->morphOne(Discount::class, 'discountable');
    }

    public function getDiscountedPriceAttribute(){
        $discountPercentage = $this->discounts->percentage ?? 0;

        return (1 - $discountPercentage/100) * $this->price;
    }

    public function getEffectivePriceAttribute()
    {
        $discountPercentage = $this->category->discount->percentage ?? 0;

        if ($this->discount && $discountPercentage == 0) {
            $discountPercentage = $this->discount->percentage;
        }

        return (1 - $discountPercentage/100) * $this->price;
    }
}
