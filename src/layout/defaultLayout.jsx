import SideNav from '@/components/common/sideNav'
import React from 'react'

export default function DefaultLayout({children, root}) {
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
                <div className=' font-semibold font-manrope'>{ root ||"Dashboards" }</div>
              </div>
              {children}
            </section>
          </main>
        </div>
      </div>
    </main>
  )
}
