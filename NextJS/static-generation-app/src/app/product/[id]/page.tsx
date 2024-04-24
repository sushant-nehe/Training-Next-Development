import Link from "next/link";

const products = [
    {
        id: "1",
        name: "Iphone 14",
        price: 500,
        description: "Apple"
    },
    {
        id: "2",
        name: "Nokia",
        price: 100,
        description: "Android"
    },
    {
        id: "3",
        name: "Vivo ",
        price: 400,
        description: "CHina"
    }
]

export async function generateStaticParams() {
    return products.map((product) => ({
        id: product.id,
    }))
}

export default function Page({ params }: { params: { id: string } }) {
    const product: any = products.find(p => p.id === params.id);
    return (
        <div className="m-24 border p-6 w-1/2 mx-auto bg-gray-100 text-5xl font-bold grid gap-6">
            <Link href="/product" className="bg-blue-900 p-2 text-xl  text-gray-100 w-32 text-center">Go Back</Link>
            <div>Id : {product.id}</div>
            <div>Name : {product.name}</div>
            <div>Price : {product.price}</div>
            <div>Description : {product.description}</div>
        </div>
    )
}