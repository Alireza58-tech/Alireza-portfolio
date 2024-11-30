import main from "/public/main.jpg";
import {motion} from "framer-motion";
const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full 
    items-center justify-center py-28 md:px-32">

    <div className="flex flex-col items-center justify-center
    gap-10 text-white"> 


    
    <motion.div
      initial={{y: -50, opacity: 0}}
      animate={{y:0 , opacity:1}}
      transition={{duration: 0.8, delay: 0.2}}
    >
        <img src={main} className="w-[300px] cursor-pointer rounded-full
                                      shadow-xl shadow-indigo-900
                                      transition-all duration-300 hover:-translate-y-5
                                      hover:scale-105 hover:shadow-2xl
                                      hover:shadow-indigo-600
                                      md:w-[350px]">

        </img>
      </motion.div>



      <motion.div 
      initial={{y: 50, opacity: 0}}
      animate={{y:0 , opacity:1}}
      transition={{duration: 0.8, delay: 0.2}}
      className="flex max-w[600px] flex-col items-center
      justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r
                                    from-blue-500 to
                                    to-pink-500
                                      bg-clip-text
                                      text-transparent
                                      opacity-80
                                      text-5xl 
                                      transition-all duration-300
                                      hover:opacity-100 font-light
                                      md:text-7xl">Alireza</h1>
          <h3 className="bg-gradient-to-r
                                    from-pink-500 to
                                    to-blue-500
                                      bg-clip-text
                                      text-transparent
                                      opacity-80
                                      text-2xl 
                                      transition-all duration-300
                                      hover:opacity-100 font-light
                                      md:text-3xl">Tech Enthusiast</h3>
           <p className="md:text-base  text-pretty text-sm 
                        text-gray-400">I am a computer engineering student at Islamic Azad University of Qazvin, 
            with a deep passion for technology and computers. 
            Beyond my academic pursuits, I am also an avid gamer. 
            My long-term goal is to become a cybersecurity specialist, 
            focusing on protecting digital systems and information from 
            emerging threats. I am eager to develop my skills in ethical 
            hacking, network security, and threat analysis to contribute
             to a safer digital environment </p>
      </motion.div>
    
    </div> 
    
    </div> 
  )
}

export default Hero