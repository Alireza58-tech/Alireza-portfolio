import { FaTelegram } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiMenuKebab } from "react-icons/ci";
import {motion} from "framer-motion";

const Navbar = () => {

  const[isOpen,setIsOpen] = useState(false);

  const menuOpen = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between
                    border-b border-b-purple-900 bg-purple/70
                    px-16 py-6 text-white backdrop-blur-md md:justify-evenly">

          <motion.a href="#home" 
          initial={{x: -100, opacity: 0}}
          animate={{x:0 , opacity:1}}
          transition={{duration: 0.8, delay: 1}}
          className="bg-gradient-to-r
                                    from-blue-500 to
                                    to-pink-500
                                      bg-clip-text
                                      text-transparent
                                      opacity-80
                                      text-3xl font-semibold
                                      transition-all duration-300
                                      hover:opacity-100  ">
                        Alireza's portfolio
                        </motion.a>


          <ul className="hidden md:flex gap-10 ">
            <a href="#home" className="cursor-pointer opacity-70
            transition-all duration-300 hover:opacity-100 hover:text-blue-900
           ">
              <li>Home</li>
            </a>


            <a href="#tech" className="cursor-pointer opacity-70
            transition-all duration-300 hover:opacity-100  hover:text-blue-900">
              <li>Tech</li>
            </a>



            <a href="#projects" className="cursor-pointer opacity-70
            transition-all duration-300 hover:opacity-100  hover:text-blue-900">
              <li>Projects</li>
            </a>

                    

            <a href="#contact" className="cursor-pointer opacity-70
            transition-all duration-300 hover:opacity-100  hover:text-blue-900">
              <li>Contact</li>
            </a>
            
            </ul>     



            {/* socials*/}
            <motion.ul 
            initial={{x: 50, opacity: 0}}
            animate={{x:0 , opacity:1}}
            transition={{duration: 0.8, delay: 0.8}}
            className="hidden md:flex gap-5 ">

              <a href="https://t.me/Alireza_tech55" target="_blank">
              <li className="cursor-pointer text-xl opacity-70
              transition-all duration-300 hover:text-purple-500
              hover:opacity-100">
                <FaTelegram />
              </li>
              </a>




              <a href="https://www.linkedin.com/in/alireza-shabani-68a18830b" target="_blank">
              <li className="cursor-pointer text-xl opacity-70
              transition-all duration-300 hover:text-purple-500
              hover:opacity-100">
                <SiLinkedin />
              </li>
              </a>

                <a href="https://github.com/Alireza58-tech">
              <li className="cursor-pointer text-xl opacity-70
              transition-all duration-300 hover:text-purple-500
              hover:opacity-100">
                <FaGithub />
              </li>
              </a>
            </motion.ul>  

                {isOpen ? (
                   <IoMdClose className="block md:hidden text-4xl" onClick={menuOpen}/>
                ) : (
                  <CiMenuKebab className="block md:hidden text-4xl" onClick={menuOpen}/>
                )}


                {isOpen && (
                  <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col
                                  items-start justify-start gap-10 border-1
                                  border-gray-800 bg-black/90 p-12 ${isOpen ? "block" :
                                   "hidden"}`}>
                      
                    <ul className="flex flex-col gap-8">
                      
                                  
                         <a href="#home" className="cursor-pointer opacity-70
                        transition-all duration-300 hover:opacity-100">
                          <li>Home</li>
                        </a>


                        <a href="#tech" className="cursor-pointer opacity-70
                        transition-all duration-300 hover:opacity-100">
                          <li>Tech</li>
                        </a>



                        <a href="#projects" className="cursor-pointer opacity-70
                        transition-all duration-300 hover:opacity-100">
                          <li>Projects</li>
                        </a>

                                

                        <a href="#contact" className="cursor-pointer opacity-70
                        transition-all duration-300 hover:opacity-100">
                          <li>Contact</li>
                        </a>
                      
                      </ul>                




                      <ul className="flex flex-wrap gap-5 ">
              
                          <li className="cursor-pointer text-xl opacity-70
                          transition-all duration-300 hover:text-purple-500
                          hover:opacity-100">
                            <FaTelegram />
                          </li>





                          <li className="cursor-pointer text-xl opacity-70
                          transition-all duration-300 hover:text-purple-500
                          hover:opacity-100">
                            <SiLinkedin />
                          </li>


                          <li className="cursor-pointer text-xl opacity-70
                          transition-all duration-300 hover:text-purple-500
                          hover:opacity-100">
                            <FaGithub />
                          </li>
               </ul>


                  </div>
                )}
            

            
    </nav>
  )
}

export default Navbar













