import React from "react";
import Userimage from '../../Assets/Images/profileImage.jpg';


const Header = (props) => {
    return (
        <div className="h-[70px] px-[30px] flex items-center justify-between">
            <div className="cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="18"
                    viewBox="0 0 18 14"
                    fill="none"
                onClick={() => props.toggleChange(false)}
                >
                    <rect width="18" height="2" fill="#8f9fbc" />
                    <rect y="6" width="18" height="2" fill="#8f9fbc" />
                    <rect y="12" width="18" height="2" fill="#8f9fbc" />
                </svg>
            </div>
            <div>
                <div>

                </div>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <span>
                        <img
                            class="h-8 w-8 rounded-full"
                            src={Userimage}
                            alt="User"
                        />
                    </span>
                    <span className="text-[#324253]">
                        Admin
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Header;