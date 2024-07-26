import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import Image from "next/image";
export default function ListCardComponent() {


    return (
     <div className="w-full bg-yellow-300 h-[100px] mt-[20px] rounded-lg p-[15px]">
        <div className="w-[80px] h-[100%]  bg-[white] ml-[20px] flex flex-col justify-center items-center rounded-lg ">
            <p className=" text-red-500">Web</p>
            <p>17</p>
        </div>
     </div>
    );
  }