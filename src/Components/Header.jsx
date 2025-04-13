import React, { useEffect, useState } from "react";


export default function Header() {

  const [data, setData] = useState([]);
  const [count , setCount] = useState(0);
  const [pageCount , setPageCount] = useState(1);
  const [over, setOver] = useState(30);


  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then((response) => response.json())
      .then((data) => setData(data.questions))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 


  useEffect(() => {
    if (over > 0) {
      const timer = setInterval(() => {
        setOver((prevCount) => prevCount - 1 );
      }, 1000 );
      return () => clearInterval(timer);
    }else if (over == 0){
      handleNextClick();
    }
  [over]});

  const handleNextClick = () => {
    setCount(count + 1);
    setPageCount(pageCount + 1);
    setOver(30);
  };
 
  const first = document.getElementById('option-1');
  const second = document.getElementById('option-2');
  const third = document.getElementById('option-3');
  const fourth = document.getElementById('option-4');

  const options = [  ];

  return (
    <>  
          <div className="flex flex-col gap-5">
            <div className=" border-2 p-5">
              <h1 className='text-2xl font-sans text-gray-600 ' > Sentence Construction Tool </h1>
              </div>
              <div className=" border-2 flex flex-col p-5 gap-5 ">
                <div className="flex justify-center relative ">
                  <p className=" font-extralight absolute left-0 " id="timer" >{`${over} : Seconds left`}</p>
                <h1 className=" font-bold m-auto" >Question no.{`${pageCount}`}</h1>
                </div>
                <p id="question" className=" text-left" >{data[`${count}`]?.question}</p>
                </div>
                <div className="h-auto border-2 ">
                  <div id="options" className=" p-5 flex justify-evenly " >
                    <button className="border-1 p-1 rounded-xs" id="option-1" >{data[`${count}`]?.options[0]}</button>
                    <button className="border-1 p-1 rounded-xs" id="option-2" >{data[`${count}`]?.options[1]}</button>
                    <button className="border-1 p-1 rounded-xs" id="option-3" >{data[`${count}`]?.options[2]}</button>
                    <button className="border-1 p-1 rounded-xs" id="option-4" >{data[`${count}`]?.options[3]}</button>
                  </div>
                </div>
                <div className=" flex justify-end ">
                  {count < 9 ? (
                     <button className="hover:bg-gray-200 font-bold py-2 px-4 rounded-r-3xl" id="nextButton" onClick={handleNextClick} >Next</button>
                      ) : (
                         <button className="hover:bg-gray-200 font-bold py-2 px-4 rounded-r-3xl" > Submit </button>
                          ) }
                  </div>
                  </div>      
                  
    </>
  )
}
