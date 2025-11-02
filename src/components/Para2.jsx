import React,{useState,useEffect} from 'react'

const Para2 = () => {
    const arr=["Are you a developer?","Are you from any IT background?","Then you must showcase your skills in front of the world...","For that you should create an fantastic resume..","That can  take you to your dream job..","Try our website because it is absolutely free..."];
     const[index,setIndex]=useState(0);
     const[text,setText]=useState("");
     const[clr,setClr]=useState("blue");
     useEffect(()=>{
        const current=arr[index];
        let i=0;
        const type=setInterval(()=>{
            setText(current.slice(0,i));
            i++;
            if(i>current.length){
               clearInterval(type);
               setTimeout(()=>{setIndex((index)=>(index+1)%arr.length)},1500)
            }
            else if(index%2==0){
                  setClr("red") ;  
            }
            else if(index%2 !=0){
                setClr("blue") ;
            }
        },140);
     },[index]);
    return (
       <>   
           <div className='flex flex-col items-center sm:mt-3.5 lg:mt-3.5'>
                    <h1 className=' flex items-center justify-center bg-gradient-to-r from-red-500 to-yellow-300 rounded-3xl sm:w-xl lg:w-2xl h-auto font-bold text-black '>Welcome to Resume Builder</h1>
           </div>
           <div className='flex flex-col items-center justify-between font-bold sm:text-3xl lg:text-4xl' >
               <h1 className={clr==="red"?"text-red-500 sm:mt-10 lg:mt-20":"text-blue-600 sm:mt-10 lg:mt-20"}>{text}</h1>      
           </div>
       </>
  )
}

export default Para2
