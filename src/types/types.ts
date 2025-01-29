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
    email: string
    available:boolean
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


export type PasswordResponse = {
    data?: string
    error?: string
}

export type PasswordSendData = {
    id: string
    password:string
}

export type VerificationResponse = {
    status?:number
    error?: {
        data?: {
            error:string
        }
    }
}

export type VerificationData = {
    id: string
    random_code: string
    totp_code:string    
}

export interface errorType{
  error:string
}

export interface OneUserResponse{
    email:string
first_name:string
id:string
last_name:string
    role?: string,
    mail_verified?:boolean
}

export interface ManyUserResponse{
    data?: OneUserResponse[]
}
export type idType= {
    id:string
}
export type authTypeSend = {
    id:string
}