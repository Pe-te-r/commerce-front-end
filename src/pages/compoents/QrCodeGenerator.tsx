import { QRCodeCanvas } from "qrcode.react";

const QrCodeGenerator = ({ otp }: { otp: string }) => {
  const otpData = `otpauth://totp/phantom8526@duck.go?secret=${otp}&issuer=phantom market`;

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Your OTP QR Code</h1>
      <QRCodeCanvas value={otpData} size={200} level="H" className="shadow-md" />
      <p className="mt-4 text-gray-700">
        Scan this QR code with your authenticator app.
      </p>
    </div>
  );
};

export default QrCodeGenerator;
