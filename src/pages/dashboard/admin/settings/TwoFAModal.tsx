import { useState } from 'react';
import QrCodeGenerator from "../../../compoents/QrCodeGenerator";

const TwoFAModal = ({ isOpen, onClose, otp, sendTotp, id }: { 
  isOpen: boolean; 
  onClose: () => void; 
  otp: string; 
  sendTotp: ({ id, code }: { id: string; code: string }) => void; 
  id: string;
}) => {
  const [totp, setTotp] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit =  () => {
    try {
    sendTotp({ id, code: totp });
      // onClose();
    } catch (err) {
      setError('Failed to submit TOTP. Please try again.');
      console.error('Error submitting TOTP:', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 h-max w-max">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Enable 2FA</h2>
        <div className="space-y-4 mb-4">
          <p className="text-gray-600">
            Scan the QR code below using your authenticator app, or manually enter the OTP:
          </p>
          {otp !== '' ? (
            <div className="flex justify-between items-center">
              <div className="mr-2">
                <p className="font-medium text-gray-700">OTP:</p>
                <p className="text-yellow-600">{otp}</p>
              </div>
              <QrCodeGenerator otp={otp} />
            </div>
          ) : (
            <p className="text-red-600">Error occurred. Please try again later</p>
          )}
        </div>

        <div className="space-y-4 mb-4">
          <label htmlFor="totp" className="block text-sm font-medium text-gray-700">
            Enter TOTP:
          </label>
          <input
            type="text"
            id="totp"
            value={totp}
            onChange={(e) => setTotp(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter TOTP"
          />
          {error && <p className="text-red-600">{error}</p>}
        </div>

        <div className="flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className={`px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 ${!totp && 'bg-gray-600 hover:bg-gray-700 cursor-not-allowed'} `}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoFAModal;