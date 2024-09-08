import { tempProducts } from "@/app/library/data/temp-products";
import ProductTable from "@/app/components/products/product-table";

export default function Products() {
    const products = tempProducts;

    return (
        <div>
        <h1>Products</h1>
        <p>Products page content</p>
        <ProductTable data={products} />
        </div>
    );
}