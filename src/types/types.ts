export type SendLoginData = {
    email: string,
    password:string
}


type user = {
    id: string,
    role: string,
    first_name: string,
    last_name: string,
    email:string
    
}

type ErrorResponse = {
    error:string
}
export type ReceiveLoginData = {
    data?: {
        token?: string,
        user?:user
        
    }
    error?: {
        info:ErrorResponse
        status:number
    }
}

