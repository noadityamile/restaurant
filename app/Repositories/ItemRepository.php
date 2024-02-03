<?php

namespace App\Repositories;

use App\Models\Item;

class ItemRepository
{

    public function insert($request)
    {
        return Item::Create($request);
    }

}
