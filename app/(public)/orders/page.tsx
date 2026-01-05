'use client'

import {useEffect, useState} from "react";
import {Order} from "@/app/types/order";
export default function OrdersPage () {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await fetch('/api/orders');
                const data = await res.json();
                setOrders(data.orders);
                setLoading(false);
            }catch (e) {

            }finally {
                setLoading(false);
            }
        }
        fetchOrders();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (orders.length === 0) return <p>No orders yet.</p>;
    return (
        <div className="mx-auto orders">
            <div className="w-full" style={{background: "red"}}>
                <h1 className="text-center">Orders</h1>
            </div>

             <div className="container mx-auto">
                 <table>
                     <thead>
                     <tr>
                         <th>Order ID</th>
                         <th>Product</th>
                         <th>Price</th>
                         <th>Customer</th>
                     </tr>
                     </thead>
                     <tbody>
                     {orders.map(order => (
                         <tr key={order.id}>
                             <td className="border px-4 py-2">{order.id}</td>
                             <td className="border px-4 py-2">{order.product}</td>
                             <td className="border px-4 py-2">{order.price}</td>
                             <td className="border px-4 py-2">{order.customer}</td>
                         </tr>
                     ))}

                     </tbody>
                 </table>
             </div>
        </div>
    )
}