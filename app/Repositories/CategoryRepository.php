<?php

namespace App\Repositories;

use App\Models\Category;

class CategoryRepository
{

    public function getAll()
    {
        $categories = Category::with(['children','discounts', 'item', 'parent'])
            ->root()
            ->get();

        return $categories;
    }

    public function insert($request)
    {
        return Category::create($request);
    }

    public function update($item, $request)
    {
        return $item->update($request);
    }

    public function delete($category){
        return $category->delete();
     }
}
