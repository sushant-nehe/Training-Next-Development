"use client"

import { useState } from "react";

export default function Customer(){
    const [customers, setCustomers]= useState(["John","Steve","Harvey","Kim","Michael"])
    const [originalItem,setOriginalItem]=useState(null);
    const [editingCustomer,setEditingCustomer] = useState(null);
    const [newCustomer,setNewCustomer] = useState("");

    const onEdit = (customerName:any) => {
        console.log("to be edited :: ",customerName);
        setOriginalItem(customerName);
        setEditingCustomer(customerName);   
    }

    const handleEdit=(e:any)=>{
        e.preventDefault();
        console.log("edit::",e)
        customers.map((customer: any,index:any)=>{
            if(customer === originalItem && editingCustomer){
                customers[index] = editingCustomer;
            }
        })
        setOriginalItem(null)
        setEditingCustomer(null)
        setCustomers(customers);
    }

    const onDelete = (customerName:string) => {
        console.log("to be deleted:: ",customerName);
        let temp = customers
        temp = customers.filter(customer=>customer!==customerName)
        console.log("delete::",temp)
        setCustomers(temp)
    }

    const handleAdd = (e:any) => {
        e.preventDefault();
        setCustomers([...customers,newCustomer]);
        setNewCustomer("");
    }

    const handleInputChange = (e:any) => {
        console.log(e.target.value)
        setNewCustomer(e.target.value);
    }

    const handleEditChange = (e:any) => {
        console.log(e.target.value)
        setEditingCustomer(e.target.value)
    }
    // const customerItem = customers.map(customer=><li>{customer} || <span>edit</span> || <span>delete</span></li>)
    return(
        <>
        <div>
            <p className="bg-blue-200 p-4 lg:px-48">List of Customers</p>
        </div>
        <div className="flex  items-center justify-center">
            {/* <ul>{customerItem}</ul> */}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer,index)=>(
                        <tr key={index}>
                            <td>{customer}</td>
                            <td>
                                <button className="bg-yellow-700 text-green-100 px-4 py-2" onClick={()=>onEdit(customer)}>Edit</button>&nbsp;
                                <button className="bg-red-700 text-green-100 px-4 py-2" onClick={()=>{onDelete(customer)}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="mt-10 flex  items-center justify-center">
        {editingCustomer && (<form onSubmit={handleEdit}>
                <input className="border border-black" type="text" value={editingCustomer} onChange={handleEditChange}></input>
                <button type="submit">Save</button>
            </form>)}
            {!editingCustomer && (<form onSubmit={handleAdd}>
                <input className="border border-black" type="text" value={newCustomer} onChange={handleInputChange}></input>
                <button className="bg-green-700 text-green-100 px-4 py-2" type="submit">Add</button>
            </form>)}
            </div>
        </>
    )
}

// 'use client';

// import { useState } from "react";

// const customers = [
//     {
//         id: 1,
//         name: "Akash"
//     },
//     {
//         id: 1,
//         name: "Aman"
//     },
//     {
//         id: 1,
//         name: "Deep"
//     },
//     {
//         id: 1,
//         name: "Rahul"
//     },
//     {
//         id: 1,
//         name: "Sachin"
//     }
// ]

// export default function Customer() {

//     const arrayDataItems = customers.map( (customer) => <li>{customer.name}</li>);
//     // var isFormVisible:boolean = true;
//     const [isFormVisible, setIsFormVisible] = useState(false);
//     const toggleForm = ():any => {
//         // setIsFormVisible(!isFormVisible);
//     }
    
//     const addCustomer = (name:string):any => {
//         customers.push({
//             id: customers.length + 1,
//             name: name
//         })
//         console.log(customers);
//     }

//     return (
//         <div className="">
//             <p className="p-4 bg-blue-200 lg:px-48">
//             <button className="bg-blue-500 text-white py-2 px-4 rounded" type="button" onClick={toggleForm()}> 
//                 Add
//             </button>
//             </p>

//             {isFormVisible ? 
//                 <form className="bg-white px-8 py-4 mt-2 lg:px-48" onSubmit={addCustomer("custName")}>
//                   <input className="shadow appearance-none border rounded w-4/6 py-2 px-3 mr-4 text-gray-700 leading-tight" type="text" placeholder="Customer Name" />
//                   <button className="bg-blue-500 text-white font-bold py-2 px-4 w-1/6 rounded" type="submit">
//                     Add Customer
//                   </button>
//               </form>
//             : null}






//             <ul className="bg-blue-100 p-4 lg:px-48">
//                 <p>List of Customers</p><br />
//                 {arrayDataItems}
//             </ul>
//         </div>


//     )
// }