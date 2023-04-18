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

export default function Setting() {
  const [selected, setSelected] = useState(undefined)
  const [query, setQuery] = useState('')
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.slice(0, maxLength)}...`;
    }
    return text;
  };
  const router = useRouter();

  const handleNext = () => {
    router.push('/AddAccNo');
  };
  return (
    <AltLayout>
      <div className='text-[#000] pl-3 font-manrope font-semibold text-2xl'>
        Security
      </div>
      <div className='flex gap-3 my-5 rounded-lg w-full py-4 px-7  bg-white'>
        <div className='text-[#0018A8] font-semibold font-manrope'>Home / </div>
        <div className='text-[#0018A8] font-semibold font-manrope'>Dashbaord /</div>
        <div className=' font-semibold font-manrope'>Settings</div>
      </div>
      <div className='flex gap-8 pt-2'>
        <div>
          <button className='bg-[#0018A8] py-3 text-white w-[10rem] rounded'>Change Password</button>
        </div>
        <div>
          <button className=' bg-transparent text-[#0018A8] py-3  '>2FA Authentication</button>
        </div>
      </div>

      <div  className="mt-4">
        <label htmlFor="">Old Password</label>
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative mt-2">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full Correspondent Bank border-none outline-none py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                displayValue={(person) => person.name}
                onChange={(event) => setQuery(event.target.value)}
              />

            </div>
          </div>
        </Combobox>
      </div>
      <div  className="mt-4">
        <label htmlFor="">New Password</label>
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative mt-2">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full Correspondent Bank border-none outline-none py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                displayValue={(person) => person.name}
                onChange={(event) => setQuery(event.target.value)}
              />

            </div>
          </div>
        </Combobox>
      </div>
      <div  className="mt-4">
        <label htmlFor="">Confirm Password</label>
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative mt-2">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full Correspondent Bank border-none outline-none py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                displayValue={(person) => person.name}
                onChange={(event) => setQuery(event.target.value)}
              />

            </div>
          </div>
        </Combobox>
      </div>
      <div className='pt-9'>
        <button onClick={handleNext} className="bg-[#0018A8]  text-white w-[8rem] rounded py-3">Submit</button>
      </div>

    </AltLayout>
  )
}
