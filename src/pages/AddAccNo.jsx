import AltLayout from '@/layout/altLayout'
import { Fragment, useState } from 'react'
import { Combobox, Transition,Dialog } from '@headlessui/react'
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
export default function AddAccNo() {
  const [selected, setSelected] = useState(people[0])
  const [query, setQuery] = useState('')
  let [isOpen, setIsOpen] = useState(false)

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
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const handleNext = () => {
    openModal()

  };


  return (
    <AltLayout>
      <>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-[999]" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                    Payment successful
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                      Got it, thanks!
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
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
          <div  className="mt-4">
            <label htmlFor="">SWIFT Code</label>
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
          <label htmlFor="">Account Number</label>
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
