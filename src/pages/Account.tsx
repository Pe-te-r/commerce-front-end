import { useEffect, useState } from "react"
import { useOneUserQuery } from "../slice/userSlice"

import { AccountSecurity } from "./compoents/AccountSecurity";
import { AccountSettings } from "./compoents/AccountSettings";
import { RecentOrders } from "./compoents/Orders";
import { PersonalDetails } from "./compoents/PersonalDetails";
// import { Wishlist } from "./compoents/Whitelist";

type user = {
  id: string,
  role: string,
  first_name:string,
  last_name:string
  email:string
}




const AccountPage = () => {
  const user_info = localStorage.getItem('user');
  let userObject;
  if (user_info) {
    userObject = JSON.parse(user_info);
} else {
    console.log('User not logged in');
}
console.log(userObject.id)
    const {data,isSuccess,isError}= useOneUserQuery(userObject.id)
  const [user, setUser] = useState<user>(
    {
      id: '',
      role:'',
      first_name: '',
      last_name: '',
      email:''
    }
  )
  useEffect(() => {
    if (isSuccess) {
      setUser({ first_name: data['first_name'], last_name: data['last_name'], email: data['email'], id: data['id'], role:data['role']})
    }
  },[data,isSuccess,isError])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      <div className="col-span-1 lg:col-span-2 bg-white shadow-md rounded-lg p-6">
        <PersonalDetails first_name={user.first_name} last_name={user.last_name} email={ user.email} />
      </div>
      <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
        <AccountSecurity id={ user.id} />
      </div>
      <div className="col-span-1 lg:col-span-3 bg-white shadow-md rounded-lg p-6">
        <RecentOrders id={ user.id} />
      </div>
      {/* <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
        <Wishlist />
        </div> */}
      <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
        <AccountSettings id={ user.id} />
      </div>
    </div>
  );
};









export default AccountPage;
