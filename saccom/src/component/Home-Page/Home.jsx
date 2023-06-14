import Navbar from "../Navbar/navbar"
import search from '../../assets/HomeImageSlider/search.png'
import ImageSlider from "./ImageSlider/imageSlider"
// import HomeLanding from "./Products-Page/HomeLandingPage/HomeLanding"
import ViewMore from "./Products-Page/ViewMorePage/ViewMore"

const Home = () => {
  return (
    <main className="w-full h-full">
        <Navbar />
        <div className="w-full h-full ">
            <div className='relative flex md:hidden pt-[70px] px-[20px] w-full h-full items-center justify-center '>
           <input type="text" className='relative w-full rounded-[40px] h-[40px] border-solid border-2 border-[#54555B] placeholder-[#B3B4BB] pl-[16px]' placeholder='Search through hostels' />
           <div className='bg-blue-700 absolute w-[36px] h-[30px] right-0 mr-[27px] rounded-[40px] cursor-pointer'>
            <img src={search} alt="search" className='  pt-[5px] pl-[6px]' />
           </div>
        </div>
        </div>
        <ImageSlider />
        {/* <HomeLanding /> */}
        <ViewMore />
    </main>
  )
}

export default Home