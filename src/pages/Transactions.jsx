import AltLayout from '@/layout/altLayout'
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router';

const visitors = [
  {
    name: "Banker’s Acceptance",
    id: "1",
    department: "€8,500,000.00",
    email: "07/07/2022",

  },


];

export default function Transaction() {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };
  return (
    <AltLayout>
      <div className="flex justify-between items-center ">
        <div className='text-[#000] pl-3 font-manrope font-semibold text-2xl'>
            Transaction History
        </div>
        <div className='flex flex-col justify-start '>
          <button className="bg-white py-4 w-[12rem] border-[#0018A8] text-[#0018A8] border-2 rounded-lg">View Statement</button>
        </div>
        
      </div>
      <div className='flex gap-3 my-5 rounded-lg w-full py-4 px-7  bg-white'>
        <div className='text-[#0018A8] font-semibold font-manrope'>Home / </div>
        <div className='text-[#0018A8] font-semibold font-manrope'>Dashbaord /</div>
        <div className=' font-semibold font-manrope'>Transaction History</div>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className='border-b text-left text-[#404040]'>
            <th className="pl-5 py-4">
            </th>
            <th className="pl-5 py-4">
                  Details</th>
            <th className="pl-5 py-4">
                  Date</th>
            <th className="pl-5 py-4">
                  Amount</th>
            <th className="pl-5 py-4">
                  Type</th>
            <th className="pl-5 py-4">
                  Status</th>
                  

          </tr>
        </thead>
        <tbody >
          {visitors.map((visitor) => (
            <tr className='mt-10 font-dmSans' key={visitor.id}>
              <td className=" px-5 text-[#828282] py-2">{visitor.id}</td>
              <td
                className=" px-5 py-2 text-[#444444] font-bold cursor-pointer z-10"
                title={visitor.name}
              >
                <i className="far fa-user"></i>{" "}
                {truncateText(visitor.name, 8)}
              </td>
              <td
                className=" px-4 py-2 text-[#828282] cursor-pointer z-10"
                title={visitor.email}
              >
                {truncateText(visitor.email, 8)}
              </td>
                    
              <td className=" px-5 text-[#828282] py-2">{visitor.department}</td>
              <td className="flex justify-center items-center w-[5rem]  rounded-lg my-2 bg-opacity-10 bg-[#0A9707]">
                <span className="font-medium text-[#0A9707] py-2">Credit</span>
              </td>
                  
              <td className=" w-[7rem] rounded-lg bg-opacity-10 bg-[#0018A8]">
                <span className="font-medium inline-block pl-4 text-[#0018A8] text-center">Available</span>
              </td>
                   
            </tr>
          ))}
        </tbody>
      </table>
    </AltLayout>
  )
}
