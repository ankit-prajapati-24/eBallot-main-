import React from 'react'
import { useState ,useEffect} from 'react';
import { apiConnecter } from '../services/apiconnecter';
const Make_Result_Card = ({heading}) => {
    const[Elections,setElections] = useState([]);
    async function GetElections() {
        try {
          const response = await apiConnecter("POST", "https://e-ballot-server.vercel.app/v1/services/getElection", { Name:heading });
        
          // Assuming data is an object and you want to convert it into an array
          const data = response.data;
        //   console.log(data,"this is dataa")
          const electionsArray = Object.values(data);
          setElections(electionsArray[0]);
          console.log('Converted data to array:', Elections);
        //   setLoading(false);
        } catch (error) {
          console.error('Error fetching elections:', error);
        //   setLoading(false);
        }
      }
      useEffect(() => {
        GetElections();
      }, [setElections])
  return (
    <div>
      
      
    </div>
  )
}

export default Make_Result_Card
