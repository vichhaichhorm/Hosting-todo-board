import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";

// get token 
const token = getServerSession(authOption);
console.log("token is:" , token?.user?.token);


// get all workspace
export const getAllWorkSpace = async () => {
    const token = '';
    try {
        const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            }
        });
        if (!res.ok) {
            throw new Error('Failed to fetch workspaces');
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('workspaces is :', error.message);
        return null; 
    }
};



// insert workspace service
// export const insertWorkSpace = async (todoListData) =>{
//     const res = await fetch('http://110.74.194.123:8989/api/todo/v1/workspaces',
//     {
//         method: 'POST',
//         body: JSON.stringify(todoListData),
//         headers:{
//             "Content-Type": "application/json"
//         }
//     })
//     const data = res.json();
//     return data;

// }