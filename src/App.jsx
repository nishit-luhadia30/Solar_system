import './App.css'
import eco from './images/eco.png';
import ecoImage from './assets/Group (1).png';
import planet1 from './images/Layer 2 (1).png';
import planet2 from './assets/Layer 2 (2).png';
import planet3 from './images/Layer 2 (3).png';
import planet4 from './assets/Layer 2 (4).png';
import planet5 from './assets/Layer 2 (5).png';
import planet6 from './assets/Layer 2 (6).png';
import planet7 from './assets/Layer 2.png';
import sun from './images/sun.png';
import symbol1 from './images/donut_large.png';
import symbol2 from './images/Group 3.png';
import sp1 from './images/Group 4.png';
import sp1sm from './images/sp1sm.png';
import sp2sm from './images/sp2sm.png';
import sp3sm from './images/sp3sm.png';
import sp4sm from './images/sp4sm.png';
import sp5sm from './images/sp5sm.png';
import sp6sm from './images/sp6sm.png';
import sp7sm from './images/sp7sm.png';
import sp8sm from './images/sp8sm.png';
import symbol3 from './images/Group_green.png';
import sp2 from './images/sp2.png';
import sp3 from './images/sp3.png';
import arrow from './images/arrow.png';
import rocket from './images/rocket.png';
import sp4 from './images/Group 8.png';
import arrowdown from './images/arrowdown.png';
import { useState } from 'react';
import downarrow from './images/images.png';
import sp5 from './images/sp5.png';
import sp6 from './images/sp6.png';
import sp7 from './images/sp7.png';
import sp8 from './images/sp8.png';
import star from './images/stars.png';
import sunbig from './images/sunbig.png';


function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <>
    <header className='flex justify-between items-center text-white p-5 shadow-md'>
      <div className='flex items-center'>
        <img src={eco} alt="Logo" className='h-10 mr-3' />
        <h1 className='font-mono text-3xl'>Galactic.io</h1>
      </div>
      <div className='md:hidden'>
        <button onClick={toggleNav}>
          <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isNavOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
          </svg>
        </button>
      </div>
      <nav className={`absolute top-16 left-48 right-0 text-center rounded-lg bg-[#061021] lg:bg-transparent text-lg md:static md:flex md:justify-center ${isNavOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
        {['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'].map((planet) => (
          <a key={planet} className='block md:inline-block duration-300 ease-in p-4 hover:bg-gray-700 rounded' href={`#${planet.toLowerCase()}`}
            onClick={() => scrollToSection(`#${planet.toLowerCase()}`)}>
            {planet}
          </a>
        ))}
      </nav>
      <div className='hidden md:block'>
        <h1 className='text-xl'>©2023 Solarsystemdesign</h1>
      </div>
    </header>


      <section className='planet'>
        <div className='text-white text-center mt-24 p-4 md:mt-12 md:p-8'>
          <h1 className='text-4xl md:text-8xl font-semibold'>Let's get to know<br /> our solar system<br /> galaxy.</h1>
          <img className='movement absolute opacity-50 sm:opacity-70 -z-10 max-sm:w-24 max-sm:right-5 lg:right-96' src={planet7} alt="" />
          <p className='text-base md:text-lg p-4'>Embark on a cosmic journey across the ethereal expanse of the solar system Galaxy and follow the orchestration of the <br /> cosmos and the planets weaving stories of their timeless existence.</p>
          <button className='text-lg md:text-2xl bg-gradient-to-br from-blue-500 to-red-500 p-2 md:p-4 rounded-md'><a href="#sun">Learn More &darr;</a></button>
          <img className='movement absolute -left-6 opacity-85 top-20 -z-10 hidden md:block' src={ecoImage} alt="" />
          <img className='movement absolute top-10 right-0 -z-10 h-40 md:h-96 opacity-80' src={planet1} alt="" />
          <img className='movement absolute max-sm:hidden -bottom-24 right-0 h-20 md:h-64 opacity-80' src={planet2} alt="" />
          <img className='movement absolute left-0 top-80 opacity-75 -z-10 h-28 md:h-80' src={planet3} alt="" />
          <img className='movement relative right-10 top-12 opacity-85 -z-10 h-20 md:h-40' src={planet4} alt="" />
          <img className='movement absolute bottom-40 lg:-bottom-24 -z-10 left-1/2 h-20 md:h-40 opacity-80' src={planet5} alt="" />
          <img className='movement absolute top-36 -z-10 left-1/3 h-20 md:h-40 opacity-70' src={planet6} alt="" />
          
        </div>
      </section>

      <section className='sun ml-4 md:ml-24' id='sun'>
        <img className='movement relative max-sm:top-16 top-4 w-80 md:w-auto max-sm:hidden' src={sun} alt="" />
        
        <h1 className='text-white mt-10 text-4xl max-sm:mt-20 md:text-8xl font-bold font-serif'>.SUN</h1>
        <p className='text-white p-5 md:w-[50%]'>The Sun is a huge, glowing ball of hot plasma at the centre of our solar system and provides the vital energy needed for life on Earth. This energy radiates outward in the form of light and heat, providing warmth and light to the entire solar system.</p>
        <div>
          <div className='text-white flex flex-wrap md:flex-nowrap'>
            <div className='p-5 px-8 mb-5 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex'>
              <div>
                <img src={symbol1} alt="" />
              </div>
              <div className='ml-3'>
                <h4>Diameter</h4>
                <h1 className='text-2xl md:text-3xl font-bold font-mono'>870,000</h1>
                <h1 className='text-2xl md:text-3xl font-bold font-mono'>Miles</h1>
              </div>
            </div>
            <div className='sm:ml-5 mb-5 p-5 px-11 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex justify-evenly'>
              <div>
                <img src={symbol2} alt="" />
              </div>
              <div className='ml-3'>
                <h4>Temperature</h4>
                <h1 className='text-2xl md:text-3xl font-bold font-mono'>+5,500&deg;C</h1>
                <h1 className='text-2xl md:text-3xl font-bold font-mono'>Celsius</h1>
              </div>
            </div>
          </div>
        </div>
        <img className='sm:hidden h-56 relative movement top-5' src={sunbig} alt="" />
      </section>

        {/* */}

      <section className='mercury duration-300 ease-in ' id='mercury'>
        <div className='mt-10 flex flex-wrap justify-evenly text-white'>
          <img className='movement mb-10 relative max-sm:hidden lg:right-20 w-40 md:w-auto' src={sp1} alt="" />
          
          <div className='p-4'>
            <h1 className='text-4xl md:text-8xl font-serif font-bold'>1. Mercury</h1>
            <p className='p-3 mb-4'>Mercury is the closest planet to the Sun and is known for its extreme temperatures and barren<br />, rocky surface. It is one of the four terrestrial planets in our solar system, characterized by their<br /> solid, rocky composition.</p>
            <div className='text-white flex flex-wrap md:flex-nowrap'>
              <div className='p-6 px-8 mb-5 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex'>
                <div>
                  <img src={symbol1} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Diameter</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>3,032</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Miles</h1>
                </div>
              </div>
              <div className='sm:ml-5 mb-5 p-5 px-11 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex'>
                <div>
                  <img src={symbol2} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Temperature</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>+430&deg;C</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Celsius</h1>
                </div>
              </div>
            </div>
          </div>
          <img className='max-sm:h-52 sm:hidden movement' src={sp1sm} alt="" />
        </div>
        {/* <div className='flex justify-center'>
          <a href="#venus"><img  className='w-10 h-10' src={downarrow} alt="" /></a>
        </div> */}
      </section>

      <section className='venus duration-300 ease-in' id='venus'>
        <div className='mt-10 flex flex-wrap justify-evenly text-white'>
          
          <div className='p-4'>
            <h1 className='text-4xl md:text-8xl font-serif font-bold'>2. Venus</h1>
            <p className='p-3 mb-4'>Venus is the second planet from the Sun and is similar in size and structure to Earth,<br /> earning it the title of Earth's twin. However, its thick atmosphere traps heat, making it the<br /> hottest planet in our solar system.</p>
            <div className='text-white flex flex-wrap md:flex-nowrap'>
              <div className='p-6 px-8 mb-5 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex'>
                <div>
                  <img src={symbol1} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Diameter</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>7,521</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Miles</h1>
                </div>
              </div>
              <div className='sm:ml-5 mb-5 p-5 px-11 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex'>
                <div>
                  <img src={symbol2} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Temperature</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>+470&deg;C</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Celsius</h1>
                </div>
              </div>
            </div>
          </div>
          <img className='mb-10 w-40 md:w-auto relative left-0 max-sm:hidden movement' src={sp2} alt="" />
          <img className='sm:hidden h-52 movement' src={sp2sm} alt="" />
        </div>
        {/* <div className='flex justify-center'>
          <a href="#earth"><img  className='w-10 h-10' src={downarrow} alt="" /></a>
        </div> */}
      </section>

      <section className='earth duration-300 ease-in' id='earth'>
        <div className='mt-10 flex flex-wrap justify-evenly text-white'>      
          <div className='p-4 flex justify-between'>
            <div>
              <h1 className='text-4xl md:text-8xl font-serif font-bold'>3. Earth</h1>
              <p className='p-3 mb-4'>Earth is the third planet from the Sun and the only known planet to harbor life.<br /> It has a diverse environment with oceans, forests, and mountains, and it supports a<br /> wide variety of living organisms.</p>
            </div>
            <div className='text-white flex flex-wrap md:flex-nowrap md:ml-36'>
              <div className='p-6 px-8 h-fit border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex '>
                <div>
                  <img src={symbol1} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Diameter</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>7,917</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Miles</h1>
                </div>
              </div>
              <div className='sm:hidden p-6 px-8 h-fit border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex '>
                <div>
                  <img src={symbol2} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Temperature</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>30&deg;C</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Celsius</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className='absolute right-72 hidden lg:block' src={arrow} alt="" />
        <div className='text-white text-center'>
          <h1 className='text-4xl md:text-6xl font-serif font-bold'>Moon Planet</h1>
          <p className=''>Earth has one natural satellite, the Moon, which plays a role in stabilizing the planet's <br></br> rotation and tides. The Moon's gravitational pull causes ocean tides to rise and fall.</p>
        </div>
        <img className='max-sm:hidden mb-10 w-56 md:w-auto lg:ml-36 movement' src={sp3} alt="" />
        <img className='sm:hidden h-52 relative left-14 mt-7 movement' src={sp3sm} alt="" />
        {/* <div className='flex justify-center'>
          <a href="#mars"><img className='w-10 h-10' src={downarrow} alt="" /></a>
        </div> */}
      </section>

      <section className='mars duration-300 ease-in' id='mars'>
        <div className='mt-10 flex flex-wrap justify-evenly text-white'>
          <img className='max-sm:hidden mb-10 w-40 md:w-auto relative lg:right-20 movement' src={sp4} alt="" />
          <div className='p-4'>
            <h1 className='text-4xl md:text-8xl font-serif font-bold'>4. Mars</h1>
            <p className='p-3 mb-4'>Mars, often referred to as the "Red Planet" due to its reddish appearance, is the fourth planet<br /> from the Sun. It has the tallest volcano and the deepest, longest canyon in the solar system.</p>
            <div className='text-white flex flex-wrap md:flex-nowrap'>
              <div className='p-6 px-8 mb-5 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex'>
                <div>
                  <img src={symbol1} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Diameter</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>4,212</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Miles</h1>
                </div>
              </div>
              <div className='sm:ml-5 mb-5 p-5 px-11 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex'>
                <div>
                  <img src={symbol2} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Temperature</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>-63&deg;C</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Celsius</h1>
                </div>
              </div>
            </div>
          </div>
          <img className='sm:hidden h-52 movement' src={sp4sm} alt="" />
        </div>
        {/* <div className='flex justify-center'>
          <a href="#jupiter"><img  className='w-10 h-10' src={downarrow} alt="" /></a>
        </div> */}
      </section>

      <section className='jupiter duration-300 ease-in' id='jupiter'>
        <div className='mt-10 flex flex-wrap justify-evenly text-white'>
    
          <div className='p-4'>
            <h1 className='text-4xl md:text-8xl font-serif font-bold'>5. Jupiter</h1>
            <p className='p-3 mb-4'>Jupiter is the largest planet in our solar system and is known for its Great Red Spot,<br /> a massive storm that has been raging for centuries. It has at least 79 moons, including<br /> the four largest: Io, Europa, Ganymede, and Callisto.</p>
            <div className='text-white flex flex-wrap md:flex-nowrap'>
              <div className='p-6 px-8 mb-5 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex'>
                <div>
                  <img src={symbol1} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Diameter</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>86,881</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Miles</h1>
                </div>
              </div>
              <div className='sm:ml-5 mb-5 p-5 px-11 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex'>
                <div>
                  <img src={symbol2} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Temperature</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>-108&deg;C</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Celsius</h1>
                </div>
              </div>
            </div>
          </div>
          <img className='mb-10 max-sm:hidden w-40 md:w-auto relative left-6 movement' src={sp5} alt="" />
          <img className='sm:hidden h-72 movement' src={sp5sm} alt="" />
        </div>
        {/* <div className='flex justify-center'>
          <a href="#saturn"><img className='w-10 h-10' src={downarrow} alt="" /></a>
        </div> */}
      </section>

      <section className='saturn duration-300 ease-in' id='saturn'>
        <div className='mt-10 flex flex-wrap justify-evenly text-white'>
          <img className='mb-10 w-40 md:w-6/12 max-sm:hidden relative right-10 movement' src={sp6} alt="" />
          <div className='p-4'>
            <h1 className='text-4xl md:text-8xl font-serif font-bold'>6. Saturn</h1>
            <p className='p-3 mb-4'>Saturn is the sixth planet from the Sun and is best known for its prominent ring system,<br /> composed of ice and rock particles. It has at least 62 moons, with Titan being the largest.</p>
            <div className='text-white flex flex-wrap md:flex-nowrap'>
              <div className='p-6 px-8 mb-5 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex'>
                <div>
                  <img src={symbol1} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Diameter</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>72,367</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Miles</h1>
                </div>
              </div>
              <div className='sm:ml-5 mb-5 p-5 px-11 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex'>
                <div>
                  <img src={symbol2} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Temperature</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>-139&deg;C</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Celsius</h1>
                </div>
              </div>
            </div>
          </div>
          <img className='sm:hidden h-56 movement' src={sp6sm} alt="" />
        </div>
        {/* <div className='flex justify-center'>
          <a href="#uranus"><img className='w-10 h-10' src={downarrow} alt="" /></a>
        </div> */}
      </section>

      <section className='uranus duration-300 ease-in' id='uranus'>
        <div className='mt-10 flex flex-wrap justify-evenly text-white'>
          
          <div className='p-4'>
            <h1 className='text-4xl md:text-8xl font-serif font-bold'>7. Uranus</h1>
            <p className='p-3 mb-4'>Uranus is the seventh planet from the Sun and is unique for its tilted axis,<br /> causing it to rotate on its side. It has 27 known moons and a faint ring system.</p>
            <div className='text-white flex flex-wrap md:flex-nowrap'>
              <div className='p-6 px-8 mb-5 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex'>
                <div>
                  <img src={symbol1} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Diameter</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>31,518</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Miles</h1>
                </div>
              </div>
              <div className='sm:ml-5 mb-5 p-5 px-11 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex'>
                <div>
                  <img src={symbol2} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Temperature</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>-197&deg;C</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Celsius</h1>
                </div>
              </div>
            </div>
          </div>
          <img className='mb-10 w-40 md:w-auto max-sm:hidden movement' src={sp7} alt="" />
          <img className='sm:hidden h-56 movement' src={sp7sm} alt="" />
        </div>
        {/* <div className='flex justify-center'>
          <a href="#neptune"><img className='w-10 h-10' src={downarrow} alt="" /></a>
        </div> */}
      </section>

      <section className='neptune duration-300 ease-in' id='neptune'>
        <div className='mt-10 flex flex-wrap justify-evenly text-white'>
          
          <div className='p-4'>
            <h1 className='text-4xl md:text-8xl font-serif font-bold'>8. Neptune</h1>
            <p className='p-3 mb-4'>Neptune is the eighth and farthest planet from the Sun in our solar system.<br /> It is known for its striking blue color and strong winds, and it has 14 known moons.</p>
            <div className='text-white flex flex-wrap md:flex-nowrap'>
              <div className='p-6 px-8 mb-5 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex'>
                <div>
                  <img src={symbol1} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Diameter</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>30,598</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Miles</h1>
                </div>
              </div>
              <div className='sm:ml-5 mb-5 p-5 px-11 border-[#4a1252] border-4 rounded-xl bg-gradient-to-tl from-[#3d0944] to-[#0f0932] flex'>
                <div>
                  <img src={symbol2} alt="" />
                </div>
                <div className='ml-3'>
                  <h4>Temperature</h4>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>-201&deg;C</h1>
                  <h1 className='text-2xl md:text-3xl font-bold font-mono'>Celsius</h1>
                </div>
              </div>
            </div>
          </div>
          <img className='mb-10 w-56 md:w-auto relative left-0 lg:relative lg:bottom-72 max-sm:hidden movement' src={sp8} alt="" />
          <img className='sm:hidden h-56 movement' src={sp8sm} alt="" />
        </div>
        {/* <div className='flex justify-center'>
          <a href="#mercury"><img className='w-10 h-10' src={downarrow} alt="" /></a>
        </div> */}
      </section>

      {/* <footer className='bg-gray-800 p-5 text-white text-center mt-10'>
        <h1 className='text-xl'>©2023 Solarsystemdesign</h1>
      </footer> */}

    <footer className='bg-gray-900 text-white py-8 lg:rounded-3xl lg:relative lg:left-14 lg:bottom-36 lg:w-11/12 '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold'>Join The Education Community</h1>
          <p className='mt-2 text-lg'>Join the Education Community today and be part of a movement that's transforming minds and shaping tomorrows.</p>
          <div className='mt-4 flex justify-center'>
            <input 
              type='email' 
              placeholder='Enter your email' 
              className='rounded-l-full px-4 py-2 text-gray-900 focus:outline-none w-64' 
            />
            <button className='bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-r-full px-6 py-2'>
              Subscribe &rarr;
            </button>
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4'>
          <div className='flex items-center'>
            <img src={eco} alt="Logo" className='h-10 mr-3' />
            <h1 className='font-mono text-3xl'>Galactic.io</h1>
          </div>
          <nav className='mt-4 md:mt-0 flex flex-wrap space-x-4'>
            {['Mercury', 'Venus', 'Earth', 'Mars', 'jupiter', 'saturn', 'uranus', 'neptune'].map((planet) => (
              <a key={planet} className='hover:text-gray-400' href={`#${planet.toLowerCase()}`}>
                {planet}
              </a>
            ))}
            {/* <a className='hover:text-gray-400' href='#more'>...</a> */}
          </nav>
          <div className='mt-4 md:mt-0'>
            <p>©2023 Solarsystemdesign</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}

export default App;
