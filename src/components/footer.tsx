import Link from "next/link"
export default function Footer(){
return(
    <div className="bg-zinc-400 w-112 h-40">

<div className=" flex justify-start">
    <Link href={"https://github.com/Kinzaqirat"}> <img className="h-10 mt-10 ml-10 rounded-lg" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png" alt="" /></Link>
   <Link href={""}> <img className="h-10 mt-10 ml-10 " src="https://static.vecteezy.com/system/resources/previews/018/910/715/original/linkedin-logo-linkedin-symbol-linkedin-icon-free-free-vector.jpg" alt="" /></Link>

   <ul className="flex justify-end">
  
  <Link href={"/about-us"}> <li  className=" mt-10 ml-96 ">About us</li></Link>
  <Link href={"contact-us"}><li className="mt-10 ml-96">Contact us</li></Link>
  <Link href={"/"}><li className="mt-10 ml-44">Home</li></Link>
    
   </ul>
</div>
    </div>
)
}