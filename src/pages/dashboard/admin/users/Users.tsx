import  { useEffect, useState } from "react";
import { useAllUserQuery } from "../../../../slice/userSlice";
import { OneUserResponse } from "../../../../types/types";
import Loader from "../../../compoents/Loader";

const Users = () => {
    const { data, isSuccess, isError,isLoading } = useAllUserQuery(undefined, { pollingInterval: 10000, refetchOnReconnect: true, refetchOnFocus: true })
    const [userData, setUserData] = useState<OneUserResponse[]>()
    //   const userData = [
    //     { id: 1, name: "Cy Ganderton", email: "phantom@duck.com", verified: true },
    //     { id: 2, name: "Hart Hagerty", email: "shakirah@gmail.com", verified: false },
    //     { id: 3, name: "Brice Swyre", email: "peter@gmail.com", verified: false },
    //   ];

    useEffect(() => {
        if (isSuccess) {
            if (data.data) {
                setUserData(data.data)
            }
        }
    }, [data, isSuccess, isError])
    return (
        <div className="overflow-x-auto flex justify-center mt-8">
            {userData ?
                <table className="table-auto w-[70%] border-collapse border border-gray-300 shadow-lg">
                    {/* Table Head */}
                    <thead className="bg-blue-700 text-white">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">#</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Email</th>
                            <th className="border border-gray-300 px-4 py-2">Role</th>
                            <th className="border border-gray-300 px-4 py-2">Verified</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {userData.map((user, index) => (
                            <tr
                                key={user.id}
                                className="hover:bg-blue-100 text-center transition duration-200"
                            >
                                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.first_name}{'   '}{user.last_name}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.role}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {user.mail_verified ? "True" : "False"}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 flex gap-3">
                                    <button className="bg-red-300 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition duration-300 font-mediumE">disable</button>
                                    <button className="bg-blue-300 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300 font-mediumE">More Info</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> :
                <Loader/>
            }
            {
                !isLoading && !userData && <p>no user found</p>
            }
    </div>
  );
};

export default Users;
