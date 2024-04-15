import React from 'react';
import "./Move.css"

const Move = ({number,currentPage,setCurrentPage}) => {

    const prev = ()=>{
        if(currentPage>=1){
            setCurrentPage(currentPage-1)
        }
        if(currentPage === 1 ){
            console.log("stop at here")
            setCurrentPage(1)
        }
      
        
        
    }

    const next = ()=>{
        //console.log("next clicked")
       setCurrentPage(currentPage+1)

       if(currentPage === number ){
        //console.log("stop at here")
        setCurrentPage(number)
    }
    }

  return (
    <>
    <div  className="BtnCon">
      <button onClick={prev}>Previous</button>
      <h5 className="page">{currentPage}</h5>
      <button onClick={next}>Next</button>
    </div>
    </>
  )
}

export default Move