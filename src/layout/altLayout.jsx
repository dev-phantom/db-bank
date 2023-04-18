import SideNav from '@/components/common/sideNav'
import React from 'react'

export default function AltLayout({children, root}) {
  return (
    <main>
      <div>
        <div className="flex flex-row ">
          <section className=" sticky top-0 left-0 z-[222]">
            <SideNav />
          </section>
          <main className="w-full h-screen z-[99] bg-gray-100">
            <section className="w-full pl-[20rem] pr-10 pt-10 ">
              {children}
            </section>
          </main>
        </div>
      </div>
    </main>
  )
}
