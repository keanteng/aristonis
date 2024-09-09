import { tempProductDef } from "@/app/library/definitions/temp-products-def";

interface ProductFormProps {
    product: tempProductDef | null;
}

export default function ProductForm({product}: ProductFormProps) {
  return (
    <form>
      <div className="flex flex-col gap-1">
        <p className="text-red-500 text-sm font-semibold">Product</p>
        <div className="flex flex-row">
            <label>Name:</label>
            <input type="text" name="name" value={product?.name} />
        </div>

      </div>
    </form>
  );
}