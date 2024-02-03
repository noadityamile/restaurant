<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DiscountResource extends JsonResource
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
            'discount_name' => $this->discount_name,
            'scheme'        => $this->scheme,
            'target'        => $this->discountable->name,
            'percentage'    => $this->percentage . "%"
        ];
    }
}
