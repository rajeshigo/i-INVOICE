import React, { useState } from "react";
// import "../../CSS/SideBar.css";
import { Link } from "react-router-dom";
import { Menu, MenuItem, ProSidebar, SidebarHeader, SubMenu, SidebarFooter } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
// import { AxiosConstants } from "../../Constants/AxiosConstants";
import SideBarItems from './SidebarData';
import logo from "../../Assets/Images/logo.png";
// import helpIcon from "../../Images/helpIcon.png";
// import icatSidebar from "../../Images/icatSidebar.png";
// import dashboardIcon from "../../Images/dashboardIcon.png";

//SCREEN ID -3069
const Sidebar = (props) => {
    //   const dashbordurl = '/dashboard/organization/' + AxiosConstants.AxiosBase.OrganizationName + '/Role/' + AxiosConstants.AxiosBase.RoleName;
    const setNavPath = (path) => {
        window.localStorage.setItem("navpath", path)
    };

    return (
        <ProSidebar

            collapsed={props.toggled}
            collapsedWidth={"0"}
            color="#8f9fbc"


        >
            <SidebarHeader class='max-lg:h-10 h-20 w-[100%]   bg-white'>
                <div class='flex items-center justify-center h-[100%]'>
                    <div class="flex items-center pr-8" role="group" >
                        <img src={logo} class="max-lg:h-12 max-lg:w-12 h-16 w-16 pl-0"></img>
                        <h3 class="max-lg:mob-txt-sm md:text-2xl max-lg::pl-0 font-medium text-black pl-2 flex items-center" >
                            <span class="text-orange-500 text-[30px] font-bold pb-2">
                                i
                            </span>
                            <span className="font-serif">-Invoice</span>
                        </h3>
                    </div>
                    <div onClick={() => props.toggleChange(true)} className="cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 18 18"
                            fill="#000000"
                        >
                            <path
                                d="M9 9L1 1M9 9L17 17M9 9L17 1M9 9L1 17"
                                stroke="black"
                                stroke-opacity="0.3"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarHeader>
                <Menu>
                    <MenuItem onClick={() => setNavPath("dashboard")} icon={<img src={"dashboardIcon"} alt="" height={20} width={20} />} >
                        Dashboard
                        <Link to={"dashbordurl"} />
                    </MenuItem>
                </Menu>
            </SidebarHeader>
            <Menu className="Main-Menu overflow-y-auto pt-10 mt-5 " id='sidebarScroll' >
                {!props.toggle && <div class=" max-lg:mx-[15px] max-lg:pt-[10px] max-lg:mob-txt-lg  mx-[30px] pt-[25px] pb-[10px] text-[12px] font-semibold text-[#999999]" style={{ fontFamily: "'Roboto', sans-serif" }}>APPLICATIONS
                </div>}
                {console.log('SideBarItems', SideBarItems)}
                {SideBarItems.MainMenu.SubMenu.map((item) => {
                    return (
                        <SubMenu  className="sub" title={item.title} icon={item.icon} >

                            {item.MenuItem.map((menuItem) => {
                                return (
                                    <MenuItem icon={menuItem.icon} className='NavSubtxt' onClick={() => setNavPath(menuItem.link)}>{menuItem.title}
                                        <Link to={menuItem.link} />
                                    </MenuItem>
                                )
                            })}
                        </SubMenu>
                    )
                })}
            </Menu>
            <SidebarFooter className="overflow-hidden" >
                <Menu>
                    <MenuItem icon={<img src={"helpIcon"} alt="" height={30} width={30} />} >
                        Help
                    </MenuItem>
                </Menu>
            </SidebarFooter>
        </ProSidebar>
    )
}
export default Sidebar;