import React from "react";
import Link from 'next/link';
import Image from "next/image";


export default function SideNav() {
  let links = [
    { name: "Overview", link: "/", icon:"https://res.cloudinary.com/phantom1245/image/upload/v1681638954/db%20bank/Group_3_m9874k.png" },
    { name: "Accounts", link: "/Account", icon:"https://res.cloudinary.com/phantom1245/image/upload/v1681638954/db%20bank/Group_2_c1smgx.png"},
    { name: "Transfers", link: "/#", icon:"https://res.cloudinary.com/phantom1245/image/upload/v1681638954/db%20bank/Group_1_2_jucj8w.png" },
    { name: "Statements", link: "/#", icon:"https://res.cloudinary.com/phantom1245/image/upload/v1681638954/db%20bank/Group_3_m9874k.png" },
    { name: "Transactions", link: "/#", icon:"https://res.cloudinary.com/phantom1245/image/upload/v1681638954/db%20bank/Group_4_bbrs70.png" },
    { name: "Settings", link: "/#", icon:"https://res.cloudinary.com/phantom1245/image/upload/v1681638954/db%20bank/Group_11_h4ym2z.png" },

  ];
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };
  return (
    <div>
      <div className="fixed top-0 left-0">
        <div className=" transition-all ease-in-out duration-300  border-r-2 border-gray-200 flex flex-col items-center h-screen w-[18rem]">
          <div className="py-9 w-full bg-[#0018A8] h-screen ">

            <div className="flex justify-center items-center gap-3 ">
              <div>
                <Image src="https://res.cloudinary.com/phantom1245/image/upload/v1681638954/db%20bank/safari-pinned-tab_1_conyqm.png" alt="cloud icon" width={40} height={40} />
              </div>
            </div>

            <div className="py-20">
              <ul className="w-full flex flex-col">
                {links.map((link) => (
                  <li
                    key={link.name}
                    className="w-full  duration-300  text-white flex items-center rounded-md font-manrope  justify-between px-8 py-4 text-md capitalize font-bold"
                  >
                    <Link
                      href={link.link}
                      
                      className=""
                    >
                      <div className="flex items-center gap-3">
                        <Image src={link.icon} alt={link.name} width={20} height={20} />
                        <span title={link.name}>
                          <i className="far fa-user"></i>{" "}
                          {truncateText(link.name, 17)}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
