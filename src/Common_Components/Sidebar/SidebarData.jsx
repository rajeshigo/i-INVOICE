
// import { BsDot } from "react-icons/bs";
// import lockIcon from "../../Images/lockIcon.png";
// import settingIcon from "../../Images/settingIcon.png";
// import othersIcon from "../../Images/othersIcon.png";
// import TestIcon from "../../Images/TestIcon.png"
const SideBarItems =
{
    Admin: {
        MainMenu: {
            SubMenu: [
                {
                    "title": "Management",
                    "icon": <img src={"lockIcon"} alt="" height={24} width={24} />,
                    "MenuItem": [
                        {
                            "title": "Customer",
                            "path": "Security Privileges",
                            "link": "/privilages",
                            // "icon": <BsDot />
                        },
                        {
                            "title": "Product",
                            "path": "Security Roles",
                            "link": "/Roles",
                            // "icon": <BsDot />
                        },
                        {
                            "title": "Invoice",
                            "path": "Security Users",
                            "link": "/users/organization/`${AxiosConstants.AxiosBase.OrganizationName}`",
                            // "icon": <BsDot />
                        }
                    ]
                },
                {
                    "title": "Settings",
                    "icon": <img src={"settingIcon"} alt="" height={24} width={24} />,
                    "MenuItem": [
                        {
                            "title": "Fields and system",
                            "path": "Settings Fields and system",
                            "link": "/fields_columns",
                            // "icon": <BsDot />
                        },
                        {
                            "title": "Transactions",
                            "path": "Fields and Transactions",
                            "link": "/transactions",
                            // "icon": <BsDot />
                        },
                        {
                            "title": "Settings",
                            "path": "Settings Settings",
                            "link": "/Settings",
                            // "icon": <BsDot />
                        }
                    ]
                },
                // {
                //     "title": "Others",
                //     "icon": <img src={"othersIcon"} alt="" height={24} width={24} />,
                //     "MenuItem": [
                //         {
                //             "title": "Stream",
                //             "path": "Settings Fields and system",
                //             "link": "/streamgroup",
                //             // "icon": <BsDot />
                //         },
                //         {
                //             "title": "AUT Reference and system",
                //             "path": "Settings Settings",
                //             "link": "/systemreference",
                //             // "icon": <BsDot />
                //         }
                //     ]
                // }

            ]
        }
    },
    // Analyst: {
    //     MainMenu: {
    //         SubMenu: [
    //             {
    //                 "title": "Testing",
    //                 "icon": <img src={TestIcon} alt="" height={24} width={24} />,
    //                 MenuItem: [
    //                     {
    //                         "title": "Group",
    //                         "path": "TestGroup",
    //                         "link": "/TestGroup",
    //                         "icon": <BsDot />
    //                     },
    //                     {
    //                         "title": "Scenario",
    //                         "path": "Scenario",
    //                         "link": "/Scenario",
    //                         "icon": <BsDot />
    //                     },
    //                     {
    //                         "title": "Sequence",
    //                         "path": "Sequence",
    //                         "link": "/Sequence",
    //                         "icon": <BsDot />
    //                     },
    //                 ]
    //             },

    //         ]
    //     }
    // }

}
// export default window.localStorage.getItem("RoleName") == "Admin" ? SideBarItems.Admin : SideBarItems.Analyst;
export default "Admin" == "Admin" ? SideBarItems.Admin : SideBarItems.Analyst;
