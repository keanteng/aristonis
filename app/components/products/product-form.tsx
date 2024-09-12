'use client';

import { useState } from "react";
import { tempProductDef } from "@/app/library/definitions/temp-products-def";

interface ProductFormProps {
    product: tempProductDef;
}

export default function ProductForm({product}: ProductFormProps) {
    const [formData, setFormData] = useState<tempProductDef>({
        id: product.id,
        name: product.name,
        brand: product.brand,
        category: product.category,
        price: product.price,
        barcode: product.barcode,
        weight: product.weight,
        dimension: product.dimension,
        rating: product.rating,
        sku: product.sku // Add the 'sku' property
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

  return (
    <form className="text-black" onSubmit={handleSubmit}>
    <div className="flex flex-col gap-2 mb-6">
      <div className="flex flex-col gap-0.5">
        <h1 className="text-lg font-medium">Product</h1>
        <p className="text-sm text-neutral-500">
          Viewing product with ID: {product.id}
        </p>
        <hr className="border-t border-neutral-300 my-4" />
      </div>
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="name" className="text-xs px-1 text-neutral-500 font-medium">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            className="border-2 py-1 px-2 rounded-lg bg-white w-full"
            required
            onChange={handleChange}
          />
      </div>
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="brand" className="text-xs px-1 text-neutral-500 font-medium">Brand</label>
          <input 
              type="text"
              id="brand" 
              name="brand" 
              value={formData.brand}  
              className="border-2 py-1 px-2 rounded-lg bg-white w-full"
                required
                onChange={handleChange}
          />
      </div>
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="category" className="text-xs px-1 text-neutral-500 font-medium">Category</label>
          <input 
              type="text" 
              id="category" 
              name="category" 
              value={formData.category} 
              className="border-2 py-1 px-2 rounded-lg bg-white w-full"
                required
                onChange={handleChange}
          />
      </div>
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="price" className="text-xs px-1 text-neutral-500 font-medium">Price</label>
          <input 
              type="number" 
              id="price" 
              name="price" 
              value={formData.price} 
              className="border-2 py-1 px-2 rounded-lg bg-white w-full"
                required
                onChange={handleChange}
          />
      </div>
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="rating" className="text-xs px-1 text-neutral-500 font-medium">Barcode</label>
          <input 
              type="text" 
              id="barcode" 
              name="barcode" 
              value={formData.barcode} 
              className="border-2 py-1 px-2 rounded-lg bg-white w-full"
                required
                onChange={handleChange}
          />
      </div>
      <hr className="border-t border-neutral-300 my-4" />
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="weight" className="text-xs px-1 text-neutral-500 font-medium">Weight</label>
          <input 
              type="number" 
              id="weight" 
              name="weight" 
              value={formData.weight} 
              className="border-2 py-1 px-2 rounded-lg bg-white w-full"
                required
                onChange={handleChange}
          />
      </div>
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="dimension" className="text-xs px-1 text-neutral-500 font-medium">Dimension</label>
          <input 
              type="text" 
              id="dimension" 
              name="dimension" 
              value={formData.dimension} 
              className="border-2 py-1 px-2 rounded-lg bg-white w-full"
                required
                onChange={handleChange}
          />
      </div>
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="barcode" className="text-xs px-1 text-neutral-500 font-medium">Rating</label>
          <input 
              type="number" 
              id="rating" 
              name="rating" 
              value={formData.rating} 
              className="border-2 py-1 px-2 rounded-lg bg-white w-full"
                required
                onChange={handleChange}
          />
      </div>
      <div className="flex flex-row gap-2 m-2">
        <button className="flex flex-row-reverse p-2 bg-neutral-300 self-start rounded-lg hover:bg-neutral-200 ml-auto">
            Save Edits
        </button>
        <button className="flex flex-row-reverse p-2 bg-neutral-300 self-start rounded-lg hover:bg-neutral-200">
            Delete
        </button>
      </div>
    </div>
  </form>
  );
}