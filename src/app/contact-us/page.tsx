import Footer from "@/components/footer"
import  Header  from "@/components/header"

export default function Contac(){
    return (

<div>

         <Header/>

         <div className="h-105 bg-zinc-800">
        
         <div className="">
        <h1 className="flex justify-center text-5xl text-white 	 underline  #fff;"> Stay in touch </h1>
        </div>
        
        
         <div className="flex justify-center  mt-14 ml-64">
                <form className="bg-gray-800 h-72 w-80 bounded-lg p-10  mr-80 mb-80 border ">
                  {/* <h1 className="text-center text-2xl">Contact Us</h1> */}
                  <input  type="text" name="name" id="name" placeholder="Your Name" className="text-center h-10 w-64"/>
                 <br />
                 <br />
                   <input type="email" name="email" id="email" placeholder="Your Email" className="text-center h-10 w-64" />
                   <br />
                   <br />
                   <textarea name="question" id="question" placeholder=" Any Question ?" className="text-center resize-none h-10 w-64" ></textarea>
                   <button className="bg-blue-500 rounded w-16 mb-6 ml-12 hover:bg-blue-700 text-white font-bold" id="submit">Submit</button>
              </form>
                   </div>
                  
     </div>
     <Footer/>
       </div>
       
       
    )
}