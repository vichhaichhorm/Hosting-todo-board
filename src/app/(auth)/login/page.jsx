"use client"
import WorkspacePopupComponent from "@/components/WorkspacePopupComponent"
import Image from "next/image";
import loginpic from '../../../../public/assets/icons/login.svg'
import {signIn} from 'next-auth/react'
import Link from "next/link";

const LoginPage = () => {
    // define handle login 
    async function handleLogin(userInfo) {
        // console.log("user info:",userInfo.get('email'))
        const newUserInfo = {
            email: userInfo.get("email"),
            password: userInfo.get("password") 
            
        }
    // calling next auth service and passing "newUserInfo"
    const res =  signIn("credentials",{
        redirect: false,
        ...newUserInfo
    })
    }

    return (
        <div className="p-[150px]">
            <div className="flex justify-between ml-[160px]">
                <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
            </div>

            {/* form login  */}
            <div className="flex justify-evenly">
                <form className="max-w-sm ml-[150px] pt-[50px]" action={handleLogin}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-5 text-sm font-bold text-[20px] text-gray-900 dark:text-white ">Login</label>
                        <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email" required />
                    </div>
                    <div className="mb-5">
                        <input type="password" name="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="*********" required />
                    </div>
                    <div className="mb-5">
                        <button
                            className="shadow-sm bg-blue-500 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        >Login</button>
                    </div>

                    <div className="flex items-start mb-10">
                        <label htmlFor="terms" className=" text-sm font-medium text-gray-900 dark:text-gray-300">Didn't have account yet? 
                        <Link href={"/register"} className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer underline">Register</Link>
                        </label>
                    </div>

                    <div className="flex items-start mb-10">
                        <hr className="w-[130px] h-[2px] " />
                        <p className="ml-[10px] mt-[-11px]">Continue With</p>
                        <hr className="w-[130px] h-[2px] ml-[12px]" />
                    </div>

                    <div className="mb-5">
                        <button
                            className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        >Google</button>
                    </div>
                </form>
                <div className="mr-[50px]">
                    <Image src={loginpic} alt="Login" className="w-[340px] h-[500px]" />
                </div>
            </div>
            <div className="ml-[160px] mt-[50px]">
                <p>©2024 My office.All Rights Reserved by Vichhai</p>
            </div>

        </div>
    )
}

export default LoginPage