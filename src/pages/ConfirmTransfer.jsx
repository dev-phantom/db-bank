import AltLayout from '@/layout/altLayout'
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router';

const people = [
  { id: 1, name: '' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 1, name: 'Wade Cooper' },
]
export default function ConfirmTransfer() {
  const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState('')

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
        person.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.toLowerCase().replace(/\s+/g, ''))
      )
  const router = useRouter();

  const handleNext = () => {
    router.push('/AddAccNo');
  };

  return (
    <AltLayout>
      <div className="flex justify-between items-center ">
        <div className='text-[#000] pl-3 font-manrope font-semibold text-2xl'>
            Confirm Transfer Details
        </div>
        <div className='flex flex-col justify-start '>
          <div className='font-manrope font-extrabold text-3xl text-[#000]'>€8,500,000.00</div> 
          <div>AVAILABLE  BALANCE</div>
        </div>
        
      </div>
      <div className='flex gap-3 my-5 rounded-lg w-full py-4 px-7  bg-white'>
        <div className='text-[#0018A8] font-semibold font-manrope'>Home / </div>
        <div className='text-[#0018A8] font-semibold font-manrope'>Dashbaord /</div>
        <div className=' font-semibold font-manrope'>Transfer</div>
      </div>
      <div>
        <div className="pt-3 gap-3">
          <label htmlFor="" className="py-2">Select Currency</label>
          <Combobox value={selected} onChange={setSelected}>
            <div className="relative mt-3">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full outline-none border-none py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={(person) => person.name}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredPeople.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                    </div>
                  ) : (
                    filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-teal-600 text-white' : 'text-gray-900'
                          }`
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? 'text-white' : 'text-teal-600'
                                }`}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
          <div  className="mt-4">
            <label htmlFor="">Amount in Euro</label>
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
        </div>
        <div  className="mt-4">
          <label htmlFor="">Location</label>
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
      </div>
    </AltLayout>
  )
}
