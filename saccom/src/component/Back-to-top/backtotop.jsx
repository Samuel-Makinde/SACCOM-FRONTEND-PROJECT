import topArrow from './arrow up.png'

const Backtotop = () => {
  return (
    <main className='w-full h-full mt-[20px] md:mt-0'>
        <div className=' flex flex-col md:flex-row-reverse justify-center  items-center md:items-start bg-[#EDEFFD] md:bg-white px-0 w-full h-[56px] cursor-pointer'>
                <img src={topArrow} alt="UpArrow" />
                <p className='leading-[15.22px] text-[#4D5DED] text-[12px]'>Back to top</p>
        </div>
    </main>
  )
}

export default Backtotop