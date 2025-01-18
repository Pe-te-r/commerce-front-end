// import { useEffect, useState } from "react"
// import { useOneUserQuery } from "../slice/userSlice"
// import PersonalDetails from "../components/PersonalDetails"

import { AccountSecurity } from "./compoents/AccountSecurity";
import { AccountSettings } from "./compoents/AccountSettings";
import { RecentOrders } from "./compoents/Orders";
import { PersonalDetails } from "./compoents/PersonalDetails";
import { Wishlist } from "./compoents/Whitelist";

// const Account = () => {
//   const {data,isSuccess,isError,isLoading}= useOneUserQuery("6726b271-61fc-4778-bd40-50c778cc6ba6")
//   const [user, setUser] = useState(
//     {
//       first_name: '',
//       last_name: '',
//       email:''
//     }
//   )
//   useEffect(() => {
//     if (isSuccess) {
//       setUser({first_name:data['first_name'],last_name:data['last_name'],email:data['email']})
//     }
//   },[data,isSuccess,isError])
//   return (
//     // <div>Account</div>
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       {isLoading ? <p>loading</p> :
//         <PersonalDetails email={user.email} firstName={user.first_name} lastName={ user.last_name} />
//        }
//     </div>
//   )
// }

// export default Account











const AccountPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
      <div className="col-span-1 lg:col-span-2 bg-white shadow-md rounded-lg p-6">
        <PersonalDetails />
      </div>
      <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
        <AccountSecurity />
      </div>
      <div className="col-span-1 lg:col-span-3 bg-white shadow-md rounded-lg p-6">
        <RecentOrders />
      </div>
      <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
        <Wishlist />
      </div>
      <div className="col-span-1 bg-white shadow-md rounded-lg p-6">
        <AccountSettings />
      </div>
    </div>
  );
};









export default AccountPage;
