<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
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
            'category_name' => $this->category_name,
            'parent_id' => $this->parent_id,
            'created_at' => $this->created_at->toDateString(),
            'children' => $this->children,
            'discounts' => $this->discounts,
            'item' => $this->item
        ];
    }
}
