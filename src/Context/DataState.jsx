import React,{useState,useEffect} from 'react'
import ChartContext from "./DataContext"
function DataState(props) {
    //defining initial state using usestate 
    const [chartdata, setChartdata] = useState([]);
    const host = "http://localhost:5500";
    //getting data from api using fetch
    useEffect(() => {
    async function getAlldata(url = `${host}/getalldata}`) {
      //async function means it will return a promise , promise means it will return a value in future 
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'auth-token':""}
        }); 
        // parses JSON response into native JavaScript objects
        const data = await response.json();
        console.log(data);
        setChartdata(data)
        if(data.success===false){
            console.log("fail");
            return;
        }
    } }, []);
  return (
    <ChartContext.Provider value={chartdata} >
    {props.children}
</ChartContext.Provider>
  )
}

export default DataState
