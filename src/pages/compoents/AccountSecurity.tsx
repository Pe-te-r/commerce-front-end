import { idType } from "../../types/types";

export const AccountSecurity = ({ id }: idType) => {
    console.log(`Account ID: ${id}`);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Account Security</h2>
            <div className="mb-4">
                <p className="font-semibold">Password:</p>
                <p>********</p>
                <button className="text-blue-600 hover:underline mt-2">
                    Change Password
                </button>
            </div>
            <div className="mb-4">
                <p className="font-semibold">Two-Factor Authentication (2FA):</p>
                <p>Status: <span className="text-green-600">Enabled</span></p>
                <button className="text-blue-600 hover:underline mt-2">
                    Manage 2FA Settings
                </button>
            </div>
            {/* <div className="mb-4">
                <p className="font-semibold">Backup Codes:</p>
                <p>Backup codes are available for account recovery.</p>
                <button className="text-blue-600 hover:underline mt-2">
                    Generate New Codes
                </button>
            </div> */}
            {/* <div className="mb-4">
                <p className="font-semibold">Login History:</p>
                <p>View recent login attempts and device activity.</p>
                <button className="text-blue-600 hover:underline mt-2">
                    View Login History
                </button>
            </div> */}
            {/* <div className="mb-4">
                <p className="font-semibold">Authorized Devices:</p>
                <p>Manage devices that are authorized to access your account.</p>
                <button className="text-blue-600 hover:underline mt-2">
                    Manage Devices
                </button>
            </div> */}
        </div>
    );
};
