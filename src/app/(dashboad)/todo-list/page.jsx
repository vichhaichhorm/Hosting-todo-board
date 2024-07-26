import { getAllWorkSpace } from '@/app/services/workspace.service'
import AddNewTaskComponent from '@/components/AddNewTaskComponent'
import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import ListCardComponent from '@/components/ListCardComponent'
import MonthlyStatisticsComponent from '@/components/MonthlyStatisticsComponent'
import NavbarComponent from '@/components/NavbarComponent'
import SidebarComponent from '@/components/SidebarComponent'
import TodoCardComponent from '@/components/TodoCardComponent'
import React from 'react'

const TodoList = async() => {

    const workSpaceData = await getAllWorkSpace();
    console.log("workspace data:",workSpaceData)

  return (
    // <div className="flex relative">
    //     <div className="w-[20%]">
    //       <SidebarComponent />
    //     </div>
    //     <div className="w-[80%]">
    //       <NavbarComponent />
    //       <div className='w-[50%] absolute top-[90px] left-[380px]'>
    //       <ListBoardComponentHeader />
    //       </div>
          
    //     </div>
        

        
    //   </div>
    <div className="flex relative">
    <div className="w-[20%]">
      <SidebarComponent />
    </div>
    <div className="w-[80%]">
      <NavbarComponent />
    </div>
    <div>
      <div className="w-[50%] absolute top-[90px] left-[380px]">
        <ListBoardComponentHeader />
        <ListCardComponent/>
        <div>
        </div>
      </div>
      <div className="w-[10%] absolute top-[90px] right-[230px]">
        <MonthlyStatisticsComponent />
      </div>
    </div>
    <div className='absolute top-[85vh] right-[100px]'>
        <AddNewTaskComponent />
      </div>
  </div>
  )
}

export default TodoList