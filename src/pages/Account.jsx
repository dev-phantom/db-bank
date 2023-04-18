import DefaultLayout from '@/layout/defaultLayout'
import React from 'react'

const visitors = [
  {
    name: "Banker’s Acceptance",
    id: "1",
    department: "€8,500,000.00",
    email: "07/07/2022",

  },


];

export default function Account() {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };
  return (
    <DefaultLayout>
      <div className='w-1/2 flex flex-row my-4 gap-3 pl-4'>
        <div className='flex flex-col w-full h-[10rem] bg-white  justify-center items-center rounded-xl'>
          <h1 className='pt-3 text-[#000] font-manrope font-semibold '>
                  Available Balance 
          </h1>
          <h3 className='text-[#0018A8] pt-3 text-3xl font-manrope font-semibold'>
                 €8,500,000.00
          </h3>
        </div>
        <div className='flex flex-col w-full h-[10rem] bg-white  justify-center items-center rounded-xl'>
          <h1 className='pt-3 text-[#000] font-manrope font-semibold '>
                  Book Balance 
          </h1>
          <h3 className='text-[#0018A8] pt-3 text-3xl font-manrope font-semibold'>
                  €0.00
          </h3>
        </div>        
      </div>
      <div className='text-[#000] my-4 pl-3 font-manrope font-bold text-2xl'>
            Account History
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
    </DefaultLayout>
  )
}
