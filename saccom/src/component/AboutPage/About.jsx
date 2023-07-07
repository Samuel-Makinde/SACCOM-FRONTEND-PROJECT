import image1 from "./images/8+.png";
import image2 from "./images/3+.png";
import image3 from "./images/10k (1).png";
import image4 from "./images/Goals illustration 1.png";
import image5 from "./images/Target illustration 1.png";
// import Navbar from '../Navbar/navbar';
// import Backtotop from '../Back-to-top/backtotop';
// import {Link} from 'react-scroll'

const About = () => {
  return (
    <main className=" w-full h-full md:mb-[200px]">
      {/* <Navbar /> */}
      <div className="md:pt-[80px] pt-[80px] px-4 md:px-0 font-euclid">
        <div className=" w-full h-full md:grid md:grid-cols-2 md:gap-10 overflow-hidden">
          <h1 className=" font-semibold text-[24px] leading-[30.43px] md:text-[48px] lg:w-[613px] md:w-[400px] md:h-[183px] lg:ml-[83px] md:ml-[50px] md:leading-[60.86px]">
            At <span className="text-[#4D5DED]"> SACCOM</span> We are passionate
            about your comfortability.
          </h1>
          <p className=" font-regular lg:w-[469px] mt-[25px] md:h-[80px] md:mt-[103px] md:mr-[5px] break-words leading-[20.29px] text-[#54555B] text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in sed
            adipisci officia incidunt? Ut, ex hic. Eligendi libero praesentium
            error doloremque, aut culpa, eaque veritatis impedit iure totam ab.
          </p>
        </div>
        <div className="hidden md:flex md:border-b-4 mt-[30px] md:border-b-[#D4D5DB] lg:ml-[83px] md:ml-[50px] border-[2px] md:mr-[5px]"></div>

        <div className="w-full h-[400px] flex flex-col-reverse md:flex-none md:grid md:grid-cols-2 md:gap-4">
          <div>
            <h1 className="md:mt-[70px] lg:ml-[83px] md:ml-[50px]  font-semibold text-[24px] text-[#2F3035] md:text-[48px] md:w-[369px] md:h-[61px]  md:leading-[60.86px]">
              Our Mission
            </h1>
            <p className="text-[#85868D] lg:ml-[83px] md:ml-[50px] text-[16px]  font-regular leading-[20.29px] md:w-[350px] lg:w-[469px] h-[80px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              unde, aut quisquam itaque magnam soluta deserunt voluptate
              delectus, cupiditate totam laborum! Quia veritatis magni eaque
              eveniet quisquam voluptas suscipit eos!
            </p>
          </div>

          <div className="mt-[40px] w-full h-full  ">
            <img
              className="w-full md:h-[400px] h-[273px] "
              src={image4}
              alt="aboutme"
            />
          </div>
        </div>

        <div className="w-full h-full md:grid md:grid-cols-2 md:gap-4">
          <div className="w-full h-full md:mt-[70px] mt-[50px] md:mr-[5px] lg:ml-[83px] md:ml-[30px]">
            {/* <p>quality image present</p> */}
            <img
              className="w-full  h-[273px] md:h-[400px] "
              src={image5}
              alt="aboutme"
            />
          </div>
          <div className="md:mt-[120px]">
            <h1 className="text-[#2F3035] text-[24px] mt-[20px] md:mt-0  font-semibold md:text-[48px] md:leading-[60.86px] md:w-[336px] md:h-[61px]">
              Our Vision
            </h1>
            <p className=" font-regular  lg:w-[469px] md:h-[80px] md:mr-[5px] break-words leading-[20.29px] text-[#85868D] text-[16px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae et debitis sapiente. Eos nesciunt veritatis, voluptatem
              quo voluptates, inventore ducimus asperiores sint natus sequi
              dolore autem et labore dolores! Iusto.
            </p>
          </div>
        </div>

        <div className=" border-b-[1px] border-b-[#AAB0B766] md:flex md:border-b-4 mt-[30px] md:border-b-[#D4D5DB] lg:ml-[83px] md:ml-[50px] border-[2px] md:mr-[5px]"></div>

        <div className="mt-[40px] md:grid md:grid-cols-3 gap-4 md:mt-[70px] lg:ml-[83px]  md:ml-[50px]">
          <div className="flex flex-col justify-center items-center md:mt-0 mt-[20px] ">
            <p className="md:h-[160px] lg:h-[110px] text-[16px]   text-[#85868D]">
              <span className="pl-[7px]">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </span>
              <span>
                Natus ea voluptatum aperiam labore est perferendis quis{" "}
              </span>
              <span> qui tenetur itaque alias, harum voluptatibus nam </span>
              <span>
                {" "}
                laborum possimus. Eaque itaque eligendi nostrum officia!
              </span>
            </p>
            <img className="mt-[20px] md:mt-[40px]" src={image1} alt="number" />
          </div>
          <div className="flex flex-col justify-center items-center md:mt-0 mt-[20px]">
            <p className="md:h-[160px] lg:h-[110px] text-[16px] text-[#85868D]">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              numquam, dolores quidem soluta magni iure esse eos eligendi minus
              praesentium tempore? Quam nam repellendus dolore at reiciendis
              laborum adipisci amet?
            </p>
            <img className="mt-[20px] md:mt-[40px]" src={image2} alt="number" />
          </div>
          <div className="flex flex-col justify-center items-center md:mt-0 mt-[20px]">
            <p className="md:h-[160px] lg:h-[110px] text-[16px] text-[#85868D]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
              nisi nostrum quos, quas nemo hic rerum aliquam quod maiores
              dolorum maxime excepturi molestias eaque enim dolor reiciendis
              voluptatem a sed!
            </p>
            <img className="mt-[20px] md:mt-[40px]" src={image3} alt="number" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
