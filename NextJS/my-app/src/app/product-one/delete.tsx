"use client"

import { DeleteProduct } from "@/action/product/productAction";

export default function ProductDelete( props: {id: string }){
    const productDelete = (id:string) => {
        DeleteProduct(id);
        window.location.reload()
    };
    return(
<button className=" font-bold border p-1 bg-red-700 text-gray-100" onClick={()=>productDelete(props.id)}>Delete</button>
    )
}