<?php

namespace App\Repositories;

use App\Models\Item;

class ItemRepository
{

    public function insert($request)
    {
        return Item::create($request);
    }

    public function update($item, $request)
    {
        return $item->update($request);
    }
}
