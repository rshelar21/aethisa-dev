import React from 'react'
import LeftSection from '../components/LeftSection'
import RightSection from '../components/RightSection'

const Home : React.FC = () => {
  return (
    <>
     <div className='w-full p-5 h-full sm:h-screen relative flex flex-col gap-x-3 sm:flex-row '>
        <LeftSection/>
        <RightSection/>
    </div> 
    </>
  )
}

export default Home
