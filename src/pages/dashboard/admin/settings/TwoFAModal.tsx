
import QrCodeGenerator from "../../../compoents/QrCodeGenerator";

const TwoFAModal = ({ isOpen, onClose, otp }: { isOpen: boolean; onClose: () => void;otp:string }) => {
  if (!isOpen) return null;
  
  


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 h-max w-max"> {/* Set width to 50% */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Enable 2FA</h2>
        <div className="space-y-4 mb-4">
          <p className="text-gray-600">
            Scan the QR code below using your authenticator app, or manually enter the OTP:
          </p>
          <div className="flex justify-between items-center">
            <div className=" mr-2">
              <p className="font-medium text-gray-700">OTP:</p>
              <p className="text-yellow-600">{otp}</p>
            </div>
            <QrCodeGenerator otp={otp} />
          </div>
        </div>

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TwoFAModal;
