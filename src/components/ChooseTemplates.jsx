import React from 'react'
import img1 from "./pictures/Temp1.png";
import img2 from "./pictures/Temp2.png";
import img3 from "./pictures/Temp3.png";
import img4 from "./pictures/Temp4.png";
import img5 from "./pictures/Temp5.png";
import img6 from "./pictures/Temp6.png";
import img7 from "./pictures/Temp7.png";
import img8 from "./pictures/Temp8.png";
import img9 from "./pictures/Temp9.png";
import img10 from "./pictures/Temp10.png";
const ChooseTemplates = ({onTemplateSelect}) => {
  return (
    <>  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
  {/* Template 1 */}
  <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow w-64">
    <img className="rounded-md w-full h-60 object-contain" src={img1} alt="officeImage" />
    <button onClick={()=>{onTemplateSelect(1)}} className="text-gray-900 text-xl font-semibold mt-2 rounded-b-2xl bg-gradient-to-r from-red-500 to-yellow-300 px-4 py-1">Template 1</button>
    <p className="text-gray-500 text-sm my-3">Try this.....</p>
  </div>

  {/* Template 2 */}
  <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow w-64">
    <img className="rounded-md w-full h-60 object-contain" src={img2} alt="officeImage" />
    <button onClick={()=>{onTemplateSelect(2)}} className="text-gray-900 text-xl font-semibold mt-2 rounded-b-2xl bg-gradient-to-r from-red-500 to-yellow-300 px-4 py-1">Template 2</button>
    <p className="text-gray-500 text-sm my-3">Try this.....</p>
  </div>

  {/* Template 3 */}
  <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow w-64">
    <img className="rounded-md w-full h-60 object-contain" src={img3} alt="officeImage" />
    <button onClick={()=>{onTemplateSelect(3)}} className="text-gray-900 text-xl font-semibold mt-2 rounded-b-2xl bg-gradient-to-r from-red-500 to-yellow-300 px-4 py-1">Template 3</button>
    <p className="text-gray-500 text-sm my-3">Try this.....</p>
  </div>

  {/* Template 4 */}
  <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow w-64">
    <img className="rounded-md w-full h-60 object-contain" src={img4} alt="officeImage" />
    <button onClick={()=>{onTemplateSelect(4)}} className="text-gray-900 text-xl font-semibold mt-2 rounded-b-2xl bg-gradient-to-r from-red-500 to-yellow-300 px-4 py-1">Template 4</button>
    <p className="text-gray-500 text-sm my-3">Try this.....</p>
  </div>
</div>
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center'>
         {/* 5th template */}
         <div className=" flex flex-col items-center justify-centerp-4 bg-white rounded-lg shadow max-w-80">
           <img className="rounded-md w-full h-60 object-contain" src={img5}alt="officeImage" />
           <button onClick={()=>{onTemplateSelect(5)}} className="text-gray-900 text-xl font-semibold ml-2 mt-2 rounded-b-2xl bg-gradient-to-r from-red-500 to-yellow-300">Template 5</button>
           <p className="text-gray-500 text-sm my-3 ml-2">Try this.....</p>
         </div>
         {/* 6th template */}
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow max-w-80">
           <img className="rounded-md w-full h-60 object-contain" src={img6} alt="officeImage" />
           <button onClick={()=>{onTemplateSelect(6)}} className="text-gray-900 text-xl font-semibold ml-2 mt-2 rounded-b-2xl bg-gradient-to-r from-red-500 to-yellow-300">Template 6</button>
           <p className="text-gray-500 text-sm my-3 ml-2">Try this.....</p>
         </div>
         {/* 7th template */}
         <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow max-w-80">
           <img className="rounded-md w-full h-60 object-contain" src={img7} alt="officeImage" />
           <button onClick={()=>{onTemplateSelect(7)}} className="text-gray-900 text-xl font-semibold ml-2 mt-2 rounded-b-2xl bg-gradient-to-r from-red-500 to-yellow-300">Template 7</button>
           <p className="text-gray-500 text-sm my-3 ml-2">Try this.....</p>
         </div>
          {/* 8th template */}
         <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow max-w-80">
           <img className="rounded-md w-full h-60 object-contain" src={img8} alt="officeImage" />
           <button onClick={()=>{onTemplateSelect(8)}} className="text-gray-900 text-xl font-semibold ml-2 mt-2 rounded-b-2xl bg-gradient-to-r from-red-500 to-yellow-300">Template 8</button>
           <p className="text-gray-500 text-sm my-3 ml-2">Try this.....</p>
         </div>
       </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center'>
         {/* 9th template */}
         <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow max-w-80">
           <img className="rounded-md w-full h-60 object-contain" src={img9} alt="officeImage" />
           <button onClick={()=>{onTemplateSelect(9)}} className="text-gray-900 text-xl font-semibold ml-2 mt-2 rounded-b-2xl bg-gradient-to-r from-red-500 to-yellow-300">Template 9</button>
           <p className="text-gray-500 text-sm my-3 ml-2">Try this.....</p>
         </div>
         {/* 10th template */}
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow max-w-80">
           <img className="rounded-md w-full h-60 object-contain" src={img10} alt="officeImage" />
           <button onClick={()=>{onTemplateSelect(10)}} className="text-gray-900 text-xl font-semibold ml-2 mt-2 rounded-b-2xl bg-gradient-to-r from-red-500 to-yellow-300">Template 10</button>
           <p className="text-gray-500 text-sm my-3 ml-2">Try this.....</p>
         </div>       
       </div>
   </>
  )
}

export default ChooseTemplates