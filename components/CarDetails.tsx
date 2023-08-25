"use client"
import { CarProps } from '@types';
import React from 'react'
import { Fragment } from 'react';
import { Dialog, Transition} from '@headlessui/react';
import Image from 'next/image';
import { generateCarImageUrl } from '@utils';
interface CarDetailsProps {
    isOpen: boolean;
    closeModel:() => void;
    car: CarProps;
}
const CarDetails = ({ isOpen, closeModel, car}: CarDetailsProps) => {
  return (
    <>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className='relative z-10' onClose={closeModel}>
                <Transition.Child as={Fragment} 
                enter='ease-out duration-300' 
                enterFrom='opacity-0' 
                enterTo='opacity-100' 
                leave='ease-in duration-200' 
                leaveFrom='opacity-100' 
                leaveTo='opacity-0'>
                    <div className='fixed inset-0 bg-black bg-opacity-25'>

                    </div>
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                    <Transition.Child as={Fragment} 
                    enter='ease-out duration-300' 
                    enterFrom='opacity-0 scale-95' 
                    enterTo='opacity-100 scale-100' 
                    leave='ease-in duration-200' 
                    leaveFrom='opacity-100 scale-100'  
                    leaveTo='opacity-0 scale-95'>
                        <Dialog.Panel className='relative w-full max-w-lg h-full overflow-y-auto transform    rounded-2xl bg-white text-left shadow-xl transition-all flex flex-col gap-5 p-8'>
                            <button 
                                type='button' 
                                onClick={closeModel}
                                className='absolute top-2 right-2 z-10 w-fit p-2 bg-bg-emerald-600-100 rounded-full'>
                                    <Image src='/close.svg' alt='close Image' width={20} height={20} className='object-contain'/>
                            </button>

                            <div className='flex-1 flex flex-col gap-3'>
                                <div className='relative w-full h-40 bg-emerald-600 bg-center rounded-lg'>
                                    <Image src={generateCarImageUrl(car)} alt='car model Images' fill priority className='object-contain'/>
                                </div>

                                <div className='flex gap-3'>
                                    <div className='flex-1 relative w-full h-24 bg-emerald-600 rounded-lg'>
                                        <Image src={generateCarImageUrl(car, '23')} alt='car model' fill priority className='object-contain'/>
                                    </div>

                                    <div className='flex-1 relative w-full h-24 bg-emerald-600 rounded-lg'>
                                        <Image src={generateCarImageUrl(car, '33')} alt='car model' fill priority className='object-contain'/>
                                    </div>

                                    <div className='flex-1 relative w-full h-24 bg-emerald-600 rounded-lg'>
                                        <Image src={generateCarImageUrl(car, '13')} alt='car model' fill priority className='object-contain'/>
                                    </div>
                                </div>
                            </div>

                            <div className='flex-1 flex flex-col gap-2'>
                                <h2 className='font-semibold text-xl capitalize'>
                                    {car.make} {car.model}
                                </h2>
                                
                                <div className='mt-3 flex flex-wrap gap-4'> the car */
                                    {
                                        Object.entries(car).map(([Key, value]) => (
                                            <div className='flex justify-between gap-5 w-full text-right' key={Key}>
                                                <h4 className='text-grey capitalize'>
                                                    {Key.split("_").join(" ")}
                                                </h4>
                                                <p className='text-black-100 font-semibold'>
                                                    {value}
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div> 

                            </div>

                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>
  )
}

export default CarDetails