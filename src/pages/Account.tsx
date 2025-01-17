import { useEffect } from "react"
import { useOneUserQuery } from "../slice/userSlice"

const Account = () => {
  const {data}= useOneUserQuery("6726b271-61fc-4778-bd40-50c778cc6ba6")
  useEffect(() => {
    console.log(data)
  },[data])
  return (
    <div>Account</div>
  )
}

export default Account