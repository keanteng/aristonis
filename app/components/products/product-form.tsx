import { tempProductDef } from "@/app/library/definitions/temp-products-def";

interface ProductFormProps {
    product: tempProductDef | null;
}

export default function ProductForm({product}: ProductFormProps) {
  return (
    <form className="text-black">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-1 items-center">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={product?.name}  className="border-2 p-1 rounded-lg bg-white"/>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <label htmlFor="name">Brand:</label>
          <input type="text" id="name" name="name" value={product?.brand}  className="border-2 p-1 rounded-lg bg-white"/>
        </div>
      </div>
    </form>
  );
}