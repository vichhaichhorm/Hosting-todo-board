import { loginService } from "@/app/services/auth.service"
import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import Email from "next-auth/providers/email"
import { useCallback } from "react"


export const authOption ={
    providers :[
        // mean that you login by email and password
        CredentialsProvider ({
            async authorize(userInfo){
                // console.log('user infor in next auth',userInfo);
                const newUserInfor ={
                    email: userInfo.email,
                    password: userInfo.password
                }

                const login = await loginService(newUserInfor);
                // console.log('user info',login)
                return login.payload;
            },
        })
    ],
    callbacks:{
        async jwt ({token,user}){
            return {
                ...token,...user
            }
        },
        async session({session,token }){
            session.user = token;
            return session;
        }
    }   
}

const handler = nextAuth(authOption)
export { handler as GET, handler as POST };