<?php

namespace App\Repositories;

use App\Models\Category;

class CategoryRepository
{

    public function insert($request)
    {
        return Category::create($request);
    }

    public function update($item, $request)
    {
        return $item->update($request);
    }

    public function delete($item){
        return $item->delete();
     }
}
