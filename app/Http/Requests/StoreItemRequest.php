<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreItemRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required'],
            'description' => ['required'],
            'category_id' => ['required',  'exists:categories,id'],
            'price' => ['required',  'numeric']
        ];
    }
}
