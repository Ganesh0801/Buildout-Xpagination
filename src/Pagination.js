import React,{useState,useEffect} from 'react';
import "./Pagination.css";
import axios from "axios";
import Move from "./Move"

const Pagination = () => {
  const [data,setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCurr] = useState(10);
  const lastRecord = currentPage * totalCurr;//10
  const firstRecord = lastRecord - totalCurr;//0

  const fetchAPi = async()=>{
    try{
      const response = await axios.get(`https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`)
      //console.log(response.data)
     setData(response.data)
    }catch(e){
      alert("failed to fetch data")
      console.log("error while fetching" ,e)
    }
   
  }
 
  useEffect(()=>{

     fetchAPi()
  },[])

  const currentRecords = data.slice(firstRecord, lastRecord);
  const nPage = Math.ceil(data.length / totalCurr);//5

  return (
   <>
   <div className="container">
   <h1>Employee Data Table</h1>
     <table className='table'>
        <thead className='header'>
            <tr className='row'>
                <td>Id</td>
                <td>Names</td>
                <td>Email</td>
                <td>Role</td>
            </tr>
        </thead>

        <tbody className='body'> 
            {currentRecords.map((val)=>(
                   <tr className='detail'>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.role}</td>
                   </tr>
            ))}
            
        </tbody>
        
     </table>
     <Move
        number={nPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}/>
   </div>
     
   </>
  )
}

export default Pagination