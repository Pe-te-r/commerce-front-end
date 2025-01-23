import  { useState } from "react";
import TwoFAModal from "./TwoFAModal"; // Import the modal

const Settings = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Settings</h1>
      <div className="space-y-8">
        {/* Two-Factor Authentication */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Two-Factor Authentication (2FA)
          </h2>
          <p className="text-gray-600 mb-4">
            Add an extra layer of security to your account by enabling 2FA.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Enable 2FA
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
              Update Password
            </button>
          </form>
        </section>

        {/* Update Profile */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Update Profile
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your last name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save Changes
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
      />
    </div>
  );
};

export default Settings;
