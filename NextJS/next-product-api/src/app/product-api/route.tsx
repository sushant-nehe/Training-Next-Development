// import { cookies } from 'next/headers'


export async function GET(request: Request) {
    const res = await fetch(`http://localhost:7001/product`, { cache: 'no-store' })
    const data = await res.json()
    return Response.json(data);
}

export async function POST(request: Request) {
    const res = await request.json()
    fetch('http://localhost:7001/product/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(res)
    })
    return Response.json({ res })
}


export async function DELETE(id: number) {
    const res = await fetch('http://localhost:7001/product/' + id, {
        cache: 'no-store',
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json()
    return Response.json(data);
}

export async function PATCH(productData:any) {
    const res = await fetch(`http://localhost:7001/product/${productData.id}`, {
        method: 'PATCH',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(productData)
    })
    const data = await res.json()
    return Response.json(data);
}

