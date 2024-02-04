<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'category' => $this->category->name,
            'category_id' => $this->category_id,
            'price' => $this->price,
            'discounts' => $this->discounts,
            'discounted_price' => $this->discounted_price,
            'created_at' => $this->created_at->toDateString()
        ];
    }
}
