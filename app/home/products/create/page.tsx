import ProductCreateForm from "@/app/components/products/product-create-form"


export default function CreateProduct() {
    return (
        <main>
            <div className="flex flex-col px-3 rounded-lg py-2 lg:mx-12 xl:mx-80">
                <div className="flex flex-col gap-0.5">
                    <h1 className="text-3xl font-bold">Create Product</h1>
                    <p className=" text-sm text-neutral-500">Fill in the details of the new product</p>
                </div>
                <div className="flex flex-col py-6">
                    <ProductCreateForm />
                </div>
            </div>
        </main>
    )
}