export type SendLoginData = {
    email: string,
    password: string
    code?:string
}


type user = {
    id: string,
    role: string,
    first_name: string,
    last_name: string,
    email:string
    mail_verified:boolean
    
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


export interface errorType{
  error:string
}

export interface OneUserResponse{
    email:string
first_name:string
id:string
last_name:string
    role: string
}

export type idType= {
    id:string
}
export type authTypeSend = {
    id:string
}