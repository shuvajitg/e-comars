import axios from "axios"
import { useEffect, useState } from "react"


const useJoinData = () =>{
    const[joinData, setJoinData] = useState()
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get('/api/table/joinTable')
                // const data = await response.json()
                setJoinData(response.data)
            } catch (error) {
                console.error('Error fetching join data:', error)
            }
        }
        fetchData()
    },[])
    return {
        joinData
    }
}
export default useJoinData