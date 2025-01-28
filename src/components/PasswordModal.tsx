import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbAuth2Fa } from "react-icons/tb";

export const PasswordChangeModal = ({ isOpen, isLoading, totpEnabled, onSubmit }: { isOpen: boolean, totpEnabled: boolean, onSubmit: ({emailCode,totpCode}:{emailCode:string,totpCode:string}) =>void,isLoading:boolean }) => {
  const [emailCode, setEmailCode] = useState('');
  const [totpCode, setTotpCode] = useState('');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      onSubmit({ emailCode, totpCode });
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Verify Your Identity</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                      <span className="flex gap-2  ">
                            <MdOutlineMailOutline height={10} width={50}  className="mt-1" /><label className="block text-gray-700 font-medium mb-2"> Email code</label>
                      </span>
            <input
              type="text"
              value={emailCode}
              onChange={(e) => setEmailCode(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter code sent to your email"
            />
          </div>
          {totpEnabled && (
              <div>
                <span className="flex gap-2  ">
                          <TbAuth2Fa height={50} width={50} className="mt-1"  /> <label className="block text-gray-700 font-medium mb-2">2FA</label>
                    </span>
              <input
                type="text"
                value={totpCode}
                onChange={(e) => setTotpCode(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter TOTP code"
              />
            </div>
          )}
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};