import React, { useEffect, useState } from "react";




export default function Header() {

  const [data, setData] = useState([]);
  const [count , setCount] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((response) => response.json())
      .then((data) => setData(data.questions))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 
  

  const questionCount = () => {
  }
  const nextClick = () => {
  };


  return (
    <>  
          <div className="flex flex-col gap-5">
            <div className=" border-2 p-5">
              <h1 className='text-2xl font-sans text-gray-600 ' > Sentence Construction Tool </h1>
              </div>
              <div className=" border-2 flex flex-col p-5 gap-5 ">
                <div className="flex justify-center relative ">
                  <p className=" font-extralight absolute left-0 " id="timer" >{`${count} : Seconds left`}</p>
                <h1 className=" font-bold m-auto" >{`${count}`}</h1>
                </div>
                <p id="question" className=" text-left" >{data[`${0}`]?.question}</p>
                </div>
                <div className="h-auto border-2 ">
                  <div id="options" className=" p-5 flex justify-evenly " >
                    <button className="border-1 p-1 rounded-xs " >{data[0]?.options[0]}</button>
                    <button>{data[0]?.options[1]}</button>
                    <button>{data[0]?.options[2]}</button>
                    <button>{data[0]?.options[3]}</button>
                  </div>
                </div>
                <div className=" flex justify-between ">
                  <button className="hover:bg-gray-200 font-bold py-2 px-4 rounded-l-3xl" onClick={nextClick} >Prev</button>
                  <button className="hover:bg-gray-200 font-bold py-2 px-4 rounded-r-3xl" >Next</button>
                  </div>
                  </div>      
                  
    </>
  )
}
