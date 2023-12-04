"use client"
import TopMenu from "./inc/TopMenu"
import MainHeader from "./inc/MainHeader"

export default function MainLayout({ children }) {
    return (
        <>
            <div id="Mainlayout" className=' min-w-[1050px] max-w-[1300px] mx-auto border-4' >
              <div className="">


                <TopMenu/>
                <MainHeader/>
              </div>
            </div>
        
        </>
    )
}