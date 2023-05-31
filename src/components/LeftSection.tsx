import React from 'react'

const LeftSection : React.FC = () => {
  return (
    <>
      <div className='w-full rounded-[20px] overflow-hidden relative h-[300px] sm:h-full'>
        <div className='w-full h-full -z-10 absolute inset-0'>
            <img src="/assets/bg-left.svg" alt="img" 
            className='w-full h-full object-cover'/>
        </div>

        <div className='z-30 relative text-white h-full'>
            <div className='px-5 py-5 sm:py-7'>
                <div className='w-16 h-6 '>
                    <img src="/assets/company-logo.svg" alt="" className='w-full h-full object-contain'/>
                </div>
            </div>

            <div className='bottom-5 sm:bottom-7 absolute w-full px-5'>
                <div className='mb-10 sm:mb-28'>
                    <div className='relative mb-6'>
                        <h1 className='text-2xl font-bold sm:text-4xl
                        md:text-5xl md:leading-snug'>100% Uptime 😎</h1>
                        <p className='description'>Zero Infrastructure</p>
                        <p className='description'>Management</p>
                    </div>

                    <div className='flex space-x-2 relative mt-2'>
                        <span className='h-[6px] bg-white w-5 rounded-full'></span>
                        <span className='dots-dark'></span>
                        <span className='dots-dark'></span>
                    </div>
                </div>


                <div className='bottom-0 relative left-0'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-1'>
                            <div className='w-4 h-4'>
                                <img src="/assets/domain.svg" alt="" className='w-full h-full object-cover'/>
                            </div>
                            <span className='font-normal text-xs sm:text-domain'>
                                aesthisia.com
                            </span>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <div className='w-[15px] h-[15px]'>
                            <img src="/assets/linkedin.svg" alt="" className='h-full w-full'/>
                            </div>

                            <div className='w-[15px] h-[15px]'>
                            <img src="/assets/facebook.svg" alt="" className='h-full w-full'/>
                            </div>

                            <div className='w-[15px] h-[15px]'>
                            <img src="/assets/instagram.svg" alt="" className='h-full w-full'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
      </div>
    </>
  )
}

export default LeftSection
