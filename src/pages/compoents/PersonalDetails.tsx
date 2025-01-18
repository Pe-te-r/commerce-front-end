
type personalDetails = {
    first_name:string
    last_name:string
    email:string
}

export const PersonalDetails = (data:personalDetails) => (
  <div>
    <h2 className="text-xl font-bold mb-4">Personal Details</h2>
        <p>First Name: { data.first_name}</p>
        <p>Last Name:  { data.last_name}</p>
    <p>Email: {data.email}</p>
  </div>
);