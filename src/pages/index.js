import SideNav from '@/components/common/sideNav'
import Image from 'next/image'

const visitors = [
  {
    name: "Banker’s Acceptance",
    id: "1",
    department: "€8,500,000.00",
    email: "07/07/2022",

  },
  {
    name: "Banker’s Acceptance",
    id: "1",
    department: "€8,500,000.00",
    email: "07/07/2022",

  },

];

export default function Home() {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };
  return (
    <main>
    <div>
      <div className="flex flex-row ">
        <section className=" sticky top-0 left-0 z-[222]">
          <SideNav />
        </section>
        <main className="w-full  z-[99] bg-gray-100">
          <section className="w-full pl-[20rem] pr-10 pt-10 ">
           <div>
              <h1 className='font-bold text-[#000000] pb-8 text-xl font-manrope'>Good Morning Tobias Pickett</h1>
           </div>
           <div className='flex gap-3 rounded-lg w-full py-4 px-7  bg-white'>
              <div className='text-[#0018A8] font-semibold font-manrope'>Home / </div>
              <div className='text-[#0018A8] font-semibold font-manrope'>Dashbaord /</div>
              <div className=' font-semibold font-manrope'>Dashboards</div>
           </div>
           <div className='flex w-full gap-5 pt-10'>
            <div className='w-[65%] h-[14rem] mt-[2rem] bg-white  flex rounded-2xl  overflow-hidden '>
              <div className='w-1/2 flex flex-col justify-center pl-8 items-start'>
                <div className='text-[#000] text-xl font-semibold font-manrope'>Total Balance</div>
                <div className='flex gap-4 pt-2'>
                  <div>
                    <button className='bg-[#0018A8] py-3 rounded-full text-white w-[7rem] '>Deposit</button>
                  </div>
                  <div>
                    <button className='border-[#0018A8] border-2 rounded-full bg-transparent text-[#0018A8] py-3 w-[7rem] '>Deposit</button>
                  </div>
                </div>
              </div>
              <div className='w-1/2 overflow-hidden  rounded-r-2xl bg-[#0018A8] rounded-l-full flex flex-col justify-center items-start'>
                <div className="text-[2.8rem]  font-extrabold font-manrope text-white pl-4">€8,500,000.00</div>
                <div className='font-light flex text-white pl-5 font-manrope'>ACCOUNT BALANCE</div>
              </div>
            </div>
            <div className='w-[25%] flex flex-col gap-3 pl-4'>
              <div className='flex flex-col w-full h-[8rem] bg-white  justify-center items-center rounded-xl'>
                <h1 className='pt-3 text-[#000] font-manrope font-semibold '>
                  Book Balance 
                </h1>
                <h3 className='text-[#0018A8] text-3xl font-manrope font-semibold'>
                  €0.00
                </h3>
              </div>
              <div className='flex flex-col w-full h-[8rem] bg-white  justify-center items-center rounded-xl'>
                <h1 className='pt-3 text-[#000] font-manrope font-semibold '>
                  Available Balance 
                </h1>
                <h3 className='text-[#0018A8] text-3xl font-manrope font-semibold'>
                 €8,500,000.00
                </h3>
              </div>
            </div>
           </div>
           <div className="my-8 border-t-2 w-full  border-gray-300"></div>
           <div className='text-[#000] font-manrope font-bold text-2xl'>
            Recent Transactions
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
                    <td className="flex justify-center items-center w-[5rem] py-2 rounded-lg my-2 bg-opacity-10 bg-[#0A9707]">
                      <span className="font-medium text-[#0A9707]">Credit</span>
                    </td>
                  
                    <td className=" w-[7rem] py-1 rounded-lg bg-opacity-10 bg-[#0018A8]">
                      <span className="font-medium inline-block pl-4 text-[#0018A8] text-center">Available</span>
                    </td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
    </main>
  )
}
