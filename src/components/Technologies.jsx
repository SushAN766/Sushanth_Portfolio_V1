import { BiLogoPostgresql } from 'react-icons/bi'
import { DiGit, DiPython ,DiJava } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiExpress, SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'


const Technologies = () => {
  return (
    <div className="pb-24">
      <h2
        //whileInView={{ opacity: 1, y: 0 }}
        //initial={{ opacity: 0, y: -100 }}
        //transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div
          //variants={iconVariants(2.5)}
          //initial="initial"
          //animate="animate"
          className="p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        <div
          //variants={iconVariants(2.8)}
          //initial="initial"
          //animate="animate"
          className="p-4"
        >
          <TbBrandNextjs className="text-7xl" />
        </div>

        <div
          //variants={iconVariants(3.0)}
          //initial="initial"
          //animate="animate"
          className="p-4"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </div>

        

        <div
          //variants={iconVariants(6)}
          //initial="initial"
          //animate="animate"
          className="p-4"
        >
          <FaNodeJs className="text-7xl text-green-500" />
        </div>

        <div
          //variants={iconVariants(4)}
          //initial="initial"
          //animate="animate"
          className="p-4"
        >
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </div>
      
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
         
         <div 
         //variants={iconVariants(3.2)} 
         //initial="initial" 
         //animate="animate" 
         className="p-4"
         >
          <DiPython className="text-7xl text-blue-500" />
        </div>


      <div 
         //variants={iconVariants(3.2)} 
         //initial="initial" 
         //animate="animate" 
         className="p-4"
         >
          <DiJava className="text-7xl text-blue-500" />
        </div>






        {/* <div 
         variants={iconVariants(3.0)} 
         initial="initial"
         animate="animate" 
         className="p-4">
        <img src="../postman.png" alt="Postman" className="w-16 h-16 rounded-4xl" />
        </div>*/}

        <div 
        //variants={iconVariants(3.2)} 
       // initial="initial"
        // animate="animate"
        className="p-4">
          <DiGit className="text-7xl text-red-700" />
        </div>

        <div 
        //variants={iconVariants(3.2)} 
        //initial="initial" 
        //animate="animate"
         className="p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-700" />
        </div>

        <div 
        //variants={iconVariants(3.2)}
         //initial="initial"
        //animate="animate" 
        className="p-4">
          <SiExpress className="text-7xl text-green-700" />
        </div>

      </div>
    </div>
  )
}

export default Technologies