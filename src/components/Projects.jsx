import todo from "/public/todo.jpg";
import palindrome from "/public/palindrome.jpg";
import {motion} from "framer-motion";

const projectData = [
  {
    img: todo,
    title: "TO-DO-APP",
    description:"Stay organized and boost your productivity with our easy-to-use Todo App. Whether you're managing daily tasks, planning projects, or setting personal goals",
    technologies: ["React", "HTML" , "Tailwind", "Java script "]
  },

  {
    img: palindrome,
    title: "Palidrom-App",
    description: "A palindrome is a word or phrase that can be read the same way forwards and backwards, ignoring punctuation, case, and spacing.",
    technologies: ["React", "HTML" , "Tailwind", "Java script "]
  }

]

const ScrollReveal = ({children}) =>{
  return (
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{duration: 0.8}}
    >
      {children}
    </motion.div>
  )
}



const ProjectCard = ({project}) =>{


return(
<ScrollReveal>
  <div className="flex flex-col items-center gap-8 md:flex-row
                  md:gap-24">
    <img src={project.img} alt={project.title} className="w-full 
                                                            cursor-pointer
                                                            rounded-2xl
                                                            transition-all
                                                            duration-300
                                                            hover:scale-105
                                                            md:w-[300px]"/>

    <div className="flex flex-col gap-5">

      <div className="flex flex-col gap-3">
      <div className="text-xl font-semibold">{project.title}</div>
      <p className="text-gray-400">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap5">

        {
          project.technologies.map((tech, index) =>(
            <span key={index} className="rounded-lg bg-black 
                                         p-3">
              {tech}
            </span>
          )) 
        }
      </div>



    </div>


        
  </div>

  </ScrollReveal>

)




}















const Projects = () => {
  
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col
                                 items-center justify-center gap-16 p-4
                                 md:px-14 md:py-24">
    <ScrollReveal>
    <h1 className="text-4xl font-light text-white md:text-6xl">Projects</h1>
    </ScrollReveal>
    <div className="flex w-full max-w-[1000px] flex-col gap-16
                    text-white">

            {
              projectData.map((project, index) => (
                <ProjectCard key={index} project={project}/>
              ))
            }
      </div>

      
    </div>
  )
}

export default Projects