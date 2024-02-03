<?php

namespace App\Repositories;

use App\Models\Category;
use App\Models\Discount;
use App\Models\Item;

class DiscountRepository
{
    public function getAll(){
        return Discount::with('discountable')->get();
    }

    public function insert($request)
    {
        $status = false;

        $discountModel = get_class(new Item());
        if ($request->scheme == "per-item") {
            foreach ($request->targets as $itemId) {
                $this->storeEachDiscount($discountModel, $itemId, $request);
            }
            $status = true;
        } else if ($request->scheme == "per-category") {
            $discountModel = get_class(new Category());
            foreach ($request->targets as $categoryId) {
                $this->storeEachDiscount($discountModel, $categoryId, $request);
            }
            $status = true;
        } else {
            foreach ($request->targets as $categoryId) {
                $this->storeAllMenuDiscount($discountModel, $request);
            }
            $status = true;
        }

        return $status;
    }

    private function storeEachDiscount($discountModel, $id, $request)
    {
        return Discount::updateOrCreate(
            [
                'discountable_type' => $discountModel,
                'discountable_id'   => $id
            ],
            [
                'discount_name'     => $request->name,
                'percentage'        => $request->percentage,
                'scheme'            => $request->scheme
            ]
        );
    }

    private function storeAllMenuDiscount($discountModel, $request)
    {
        $items = Item::get();
        foreach ($items as $item) {
            Discount::updateOrCreate(
                [
                    'discountable_type' => $discountModel,
                    'discountable_id'   => $item->id
                ],
                [
                    'discount_name'     => $request->name,
                    'percentage'        => $request->percentage,
                    'scheme'            => $request->scheme
                ]
            );
        }
    }

    public function delete($discount){
        return $discount->delete();
     }
}
