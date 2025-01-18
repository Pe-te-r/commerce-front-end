import { idType } from "../../types/types";

export const AccountSecurity = ({id }:idType) => {
    console.log(id)
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Account Security</h2>
            <p>Password: ********</p>
            <p>2FA: Enabled</p>
        </div>
    );
}