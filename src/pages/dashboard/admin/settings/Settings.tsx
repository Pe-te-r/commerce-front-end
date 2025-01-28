import { useEffect, useState } from "react";
import TwoFAModal from "./TwoFAModal";
import { useGetTotpQuery, useOneUserQuery, useSendTotpMutation, useUpdateUserMutation } from "../../../../slice/userSlice";
import { useToast } from "../../../../context/toastContext";
import ReactLoading from 'react-loading';
import { FaCheck } from "react-icons/fa";

const Settings = () => {
  const { showToast } = useToast();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const user_info = localStorage.getItem('user');
  const userObject = user_info ? JSON.parse(user_info) : null;

  const { isSuccess: userSuccess, isError: isUserError, error: userError, data: userData } = useOneUserQuery(userObject?.id || '');
  const [updateUser, { isLoading: updateLoading,isSuccess:updateSuccess,data:updateData }] = useUpdateUserMutation();
  const { data: totpData } = useGetTotpQuery(userObject?.id || '', { refetchOnFocus: true });
  const [sendTotp, { isSuccess: otpSuccess, isError: otpError }] = useSendTotpMutation();

  const [otp, setOtp] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    if (updateSuccess) {
      showToast('details updated','success')
      console.log(updateData)
    }
  },[updateSuccess])
  useEffect(() => {
    if (totpData) setOtp(totpData);
  }, [totpData]);

  useEffect(() => {
    if (otpSuccess) {
      showToast('2FA enabled', 'success');
      setModalOpen(false);
    }
    if (otpError) showToast('Wrong code', 'error');
  }, [otpSuccess, otpError, showToast]);

  useEffect(() => {
    if (userSuccess && userData) {
      setFirstName(userData.first_name || '');
      setLastName(userData.last_name || '');
      setEmail(userData.email || '');
      setId(userData.id || '');
    }
    if (isUserError) console.log(userError);
  }, [userSuccess, userData, isUserError, userError]);

  const handleEditSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) updateUser({ id, first_name: firstName, last_name: lastName, email });
    setIsEditing(!isEditing);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Settings</h1>
      <div className="space-y-8">
        <section className="bg-white shadow-md rounded-lg p-6 relative">
          {totpData && (
            <div className="absolute top-2 right-2 text-green-500">
              <FaCheck className="w-6 h-6" />
            </div>
          )}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Two-Factor Authentication (2FA)</h2>
          <p className="text-gray-600 mb-4">Add an extra layer of security to your account by enabling 2FA.</p>
          <button
            onClick={() => setModalOpen(true)}
            disabled={!!totpData}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {totpData ? 'Enabled' : 'Enable 2FA'}
          </button>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Change Password</h2>
          <p className="text-gray-600 mb-4">Keep your account secure by updating your password regularly.</p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Current Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter new password"
              />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Update Password
            </button>
          </form>
        </section>

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
                readOnly={!isEditing}
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
                readOnly={!isEditing}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
                readOnly
              />
            </div>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              {isEditing ? (updateLoading ? <ReactLoading type="spin" color="#0000FF" height={30} width={30} /> : 'Save') : 'Update'}
            </button>
          </form>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="checkbox" id="newsletter" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="newsletter" className="ml-2 text-gray-700 font-medium">Subscribe to Newsletter</label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="promotions" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <label htmlFor="promotions" className="ml-2 text-gray-700 font-medium">Receive promotional offers</label>
            </div>
          </div>
        </section>
      </div>

      <TwoFAModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        otp={otp}
        sendTotp={sendTotp}
        id={userObject?.id || ''}
      />
    </div>
  );
};

export default Settings;