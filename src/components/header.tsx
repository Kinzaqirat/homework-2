
 import Link from "next/link"
export default function Header(){
    return(
        <main className="h-screen bg-zinc-800">  
    

<nav className="w-112 h-20 bg-zinc-600 text-center flex justify-center border border-black" >
 <Link href={"/"}><li className="mr-52 mb-9 mt-5">Home</li></Link> 
 <Link href={"/about-us"}><li className="mr-52 mb-9 mt-5">About us</li></Link> 
 <Link href={"/contact-us"}><li className="mr-52 mb-9 mt-5">Contact us</li></Link> 


  <button className= "bg-red-300 hover:bg-red-50 dark inline-block h-7 mt-5 w-16 rounded-md "><a href="https://github.com/Kinzaqirat">Github</a></button>
</nav>
 
  <div className="h-96  mt-10" >
<div className="h-80 flex justify-center text-white">

<p className="ml-8 mr-60 text-5xl mt-24"><b>Hy Everyone my name is <span className="text-purple-800">Kinza Saeed</span></b>
<br>
</br>


<b>I'm student at GIAIC.</b>
<br></br>
<b>I'm Web developer</b>
<button className="flex justify-center text-lg bg-red-300 ml-14 rounded-md"><a href="https://www.linkedin.com/in/kinza-saeed-99aa6826b/">Linkedin</a></button>
</p>
<br />


{/* 
<img src="https://uh.edu/research/_images/sites/hpe-dsi/news/2020/girls-coding-academy-flyer-2020-8.5x11_uh-branding-cropped.jpg" alt="s" className=" mr-32"/> */}
</div>
</div>
    </main>



    )
  }

