import  { useEffect, useState } from "react";
import TwoFAModal from "./TwoFAModal"; // Import the modal
import { useGetTotpQuery, useOneUserQuery, useSendTotpMutation, useUpdateUserMutation } from "../../../../slice/userSlice";
import { useToast } from "../../../../context/toastContext";
import ReactLoading from 'react-loading';
import { FaCheck } from "react-icons/fa";

const Settings = () => {
  const{showToast} = useToast()
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
      const user_info = localStorage.getItem('user');
  let userObject;
  if (user_info) {
    userObject = JSON.parse(user_info);
  } else {
    console.log('User not logged in');
  }
  const { isSuccess: userSuccess, isError:isUserError,error:userError,data: userData } = useOneUserQuery(userObject.id)
  const [updateUser,{isSuccess:updateSuccess,isLoading:updateLoading,data:updateData}] = useUpdateUserMutation()
  const { data } = useGetTotpQuery(userObject.id,{refetchOnFocus:true}); 
  const [sendTotp,{isLoading,isSuccess,data:otpData,isError:otpError,error}]= useSendTotpMutation()
  const[otp,setOtp]=useState('')
  useEffect(() => {
    if (data) {
      setOtp(data)
      console.log(data)
    }
  }, [data])
  // update
  useEffect(() => {
    if (updateSuccess) {
      console.log(updateData)
    }
  },[updateData,updateSuccess])
  useEffect(() => {
    if (isSuccess) {
      showToast('totp enable','success')
      setModalOpen(false)
    }
    if (otpError) {
      showToast('wrong code','error')
    }
  }, [isLoading, isSuccess, otpData, otpError, error])
  
  useEffect(() => {
    if (userSuccess && userData) {
    console.log(userData)
    setFirstName(userData.first_name || '');
    setLastName(userData.last_name || '');
    setEmail(userData.email || '');
      setId(userData.id || '');
    }
    if (isUserError) {
      console.log(userError)
    }
  }, [userSuccess, userData,userError,isUserError]);
  
  const handleEditSave = (e: React.FormEvent) => {
  e.preventDefault();
  if (isEditing) {
    // Save mode: Log the updated data
    updateUser( { id:id,first_name:firstName, last_name:lastName, email:email })
    // console.log('Updated Profile Data:', { firstName, lastName, email });


  }
  setIsEditing(!isEditing); // Toggle between Edit and Save modes
  };
  
   const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Settings</h1>
      <div className="space-y-8">
        {/* Two-Factor Authentication */}
         <section className="bg-white shadow-md rounded-lg p-6 relative">
          {/* Tick Icon (if 2FA is enabled) */}
          {data && (
            <div className="absolute top-2 right-2 text-green-500">
              <FaCheck className="w-6 h-6" />
            </div>
          )}

          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Two-Factor Authentication (2FA)
          </h2>
          <p className="text-gray-600 mb-4">
            Add an extra layer of security to your account by enabling 2FA.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            disabled={Boolean(data) === true? true: false} // Disable the button if 2FA is already enabled
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >{
              Boolean(data) === true?
              'Enabled':
              ' Enable 2FA'
          }
          </button>
        </section>

        {/* Change Password */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Change Password
          </h2>
          <p className="text-gray-600 mb-4">
            Keep your account secure by updating your password regularly.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Current Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                New Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter new password"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
           update password
            </button>
          </form>
        </section>

        {/* Update Profile */}
 <section className="bg-white shadow-md rounded-lg p-6">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Update Profile</h2>
  <form className="space-y-4" onSubmit={handleEditSave}>
    <div>
      <label className="block text-gray-700 font-medium mb-2">First Name</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter your first name"
        readOnly={!isEditing} // Make editable only in Edit mode
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-2">Last Name</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter your last name"
        readOnly={!isEditing} // Make editable only in Edit mode
      />
    </div>
    <div>
      <label className="block text-gray-700 font-medium mb-2">Email Address</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
        placeholder="Enter your email"
        readOnly // Email is always non-editable
      />
    </div>
    <button type="submit"className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              { isEditing ?  'Save' : 
                updateLoading?
                <ReactLoading type="spin" color="#0000FF" height={30} width={30} />
                :"update"                 
              } 
    </button>
  </form>
  </section>
        {/* Account Preferences */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Account Preferences
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="newsletter"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="newsletter"
                className="ml-2 text-gray-700 font-medium"
              >
                Subscribe to Newsletter
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="promotions"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="promotions"
                className="ml-2 text-gray-700 font-medium"
              >
                Receive promotional offers
              </label>
            </div>
          </div>
        </section>

        {/* Other sections can be added as needed */}
      </div>

      {/* Modal */}
      <TwoFAModal
        isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
        otp={otp}
        sendTotp={sendTotp}
        id={userObject.id}
        // sendOtp={sendOtp}
      />
    </div>
  );
};

export default Settings;
