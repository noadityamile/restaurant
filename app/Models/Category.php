<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['category_name', 'parent_id'];

    public function scopeRoot($query){
        $query->where('parent_id', 0)->orWhere('parent_id', null);
    }

    public function children(){
        return $this->hasMany(Category::class, 'parent_id')->with(['children', 'item', 'discounts']);
    }

    public function parent(){
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function item(){
        return $this->hasOne(Item::class, 'category_id');
    }

    // public function childrenRecursive(){
    //     return $this->children()->with(['childrenRecursive', 'item', 'discount', 'inherit_discount']);
    // }

    public function discounts()
    {
        return $this->morphOne(Discount::class, 'discountable');
    }

    public function inheritDiscount()
    {
        return $this->parent()->discount();
    }

    public function effectiveDiscount()
    {
        // $discount = $this->discount->percentage ?? 0;

        // if($discount == 0){
        //     $discount = $this->parent->discount ?? 0;
        // }

        return 0;
    }
}
