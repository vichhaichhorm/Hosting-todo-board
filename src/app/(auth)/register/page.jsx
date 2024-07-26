import WorkspacePopupComponent from "@/components/WorkspacePopupComponent"
import Image from "next/image";
import loginpic from '../../../../public/assets/icons/sign-up.svg'
const RegistePage = () => {
    return (
        <div className="p-[150px]">
            <div className="flex justify-between ml-[160px]">
                <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
            </div>

            {/* form register  */}
            <div className="flex ml-[110px] justify-between">

                <div class="h-full bg-gray-400 dark:bg-gray-900">
                    <div class="">
                        <div class="flex justify-center">
                            <div class="w-full flex">
                                <div class="w-[500px]  bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                                    <form class="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                                        <div class="mb-4 md:flex md:justify-between">
                                            <div class="mb-4 md:mr-2 md:mb-0">
                                                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">
                                                    First Name
                                                </label>
                                                <input
                                                    class="w-[300px] px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="firstName"
                                                    type="text"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                            <div class="md:ml-2">
                                                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
                                                    Last Name
                                                </label>
                                                <input
                                                    class="w-[300px] px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="lastName"
                                                    type="text"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>
                                        <div class="mb-4 md:flex md:justify-between">
                                            <div class="mb-4 md:mr-2 md:mb-0">
                                                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">
                                                    Email
                                                </label>
                                                <input
                                                class="w-[300px] px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="email"
                                                type="email"
                                                placeholder="info@xyz.com"
                                            />
                                            </div>
                                            <div class="md:ml-2">
                                                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
                                                    Gender
                                                </label>
                                                <input
                                                    class="w-[300px] px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="lastName"
                                                    type="text"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div class="mb-4 md:flex md:justify-between">
                                            <div class="mb-4 md:mr-2 md:mb-0">
                                                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                                                    Password
                                                </label>
                                                <input
                                                    class="w-[300px] px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="password"
                                                    type="password"
                                                    placeholder="******************"
                                                />
                                                
                                            </div>
                                            <div class="md:ml-2">
                                                <label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="c_password">
                                                    Confirm Password
                                                </label>
                                                <input
                                                    class="w-[300px] px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                    id="c_password"
                                                    type="password"
                                                    placeholder="******************"
                                                />
                                            </div>
                                        </div>
                                        <div class="mb-6">
                                            <button
                                                class="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                                type="button"
                                            >
                                                Sign Up
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mr-[150px]">
                    <Image src={loginpic} alt="Login" className="w-[380px] h-[500px]" />
                </div>
            </div>
            <div className="ml-[160px] mt-[50px]">
                <p>©2024 My office.All Rights Reserved by Vichhai</p>
            </div>

        </div>
    )
}

export default RegistePage