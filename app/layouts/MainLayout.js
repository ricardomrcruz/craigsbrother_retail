"use client"
import TopMenu from "./inc/TopMenu"
import MainHeader from "./inc/MainHeader"
import SubMenu from "./inc/SubMenu"
import Footer from "./inc/Footer"


export default function MainLayout({ children }) {
    return (
        <>
            <div id="Mainlayout" className=' min-w-[1050px] max-w-[1300px] mx-auto border-4' >
              <div className="">


                <TopMenu/>
                <MainHeader/>
                <SubMenu/>
                
                {children}
                
                <Footer/>
              </div>
            </div>
        
        </>
    )
}