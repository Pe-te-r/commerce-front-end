import { idType } from "../../types/types";

export const RecentOrders = ({ id }:idType) =>{
    console.log(id)    
    return(
        
    <div>
        <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
        <ul>
            <li>Order #1: Laptop</li>
            <li>Order #2: Smartphone</li>
        </ul>
    </div>
);
}
