import { tempProductDef } from "@/app/library/definitions/temp-products-def";

interface ProductFormProps {
    product: tempProductDef | null;
}

export default function ProductForm({product}: ProductFormProps) {
  return (
    <form className="text-black">
    <div className="flex flex-col gap-2 mb-6">
      <div className="flex flex-col gap-0.5">
        <h1 className="text-lg font-medium">Product</h1>
        <p className="text-sm text-neutral-500">
          Viewing product with ID: {product?.id}
        </p>
        <hr className="border-t border-neutral-300 my-4" />
      </div>
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="name" className="text-xs px-1 text-neutral-500 font-medium">Name</label>
          <input 
              type="text" 
              id="name" 
              name="name" 
              value={product?.name || ''} 
              className="border-2 py-1 px-2 rounded-lg bg-white w-full"
          />
      </div>
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="brand" className="text-xs px-1 text-neutral-500 font-medium">Brand</label>
          <input 
              type="text"
              id="brand" 
              name="brand" 
              value={product?.brand || ''}  
              className="border-2 py-1 px-2 rounded-lg bg-white w-full"
          />
      </div>
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="category" className="text-xs px-1 text-neutral-500 font-medium">Category</label>
          <input 
              type="text" 
              id="category" 
              name="category" 
              value={product?.category || ''} 
              className="border-2 py-1 px-2 rounded-lg bg-white w-full"
          />
      </div>
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="price" className="text-xs px-1 text-neutral-500 font-medium">Price</label>
          <input 
              type="number" 
              id="price" 
              name="price" 
              value={product?.price || ''} 
              className="border-2 py-1 px-2 rounded-lg bg-white w-full"
          />
      </div>
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="rating" className="text-xs px-1 text-neutral-500 font-medium">Barcode</label>
          <input 
              type="text" 
              id="barcode" 
              name="barcode" 
              value={product?.barcode || ''} 
              className="border-2 py-1 px-2 rounded-lg bg-white w-full"
          />
      </div>
      <hr className="border-t border-neutral-300 my-4" />
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="weight" className="text-xs px-1 text-neutral-500 font-medium">Weight</label>
          <input 
              type="number" 
              id="weight" 
              name="weight" 
              value={product?.weight || ''} 
              className="border-2 py-1 px-2 rounded-lg bg-white w-full"
          />
      </div>
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="dimension" className="text-xs px-1 text-neutral-500 font-medium">Dimension</label>
          <input 
              type="text" 
              id="dimension" 
              name="dimension" 
              value={product?.dimension || ''} 
              className="border-2 py-1 px-2 rounded-lg bg-white w-full"
          />
      </div>
      <div className="flex flex-col gap-0.5 w-full">
          <label htmlFor="barcode" className="text-xs px-1 text-neutral-500 font-medium">Rating</label>
          <input 
              type="number" 
              id="rating" 
              name="rating" 
              value={product?.rating || ''} 
              className="border-2 py-1 px-2 rounded-lg bg-white w-full"
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