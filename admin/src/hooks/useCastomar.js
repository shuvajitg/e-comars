import { useEffect, useState } from 'react'
import axios from 'axios'

const useCastomar = () => {
    const [userData, setUserDta] = useState()
    useEffect(()=>{
        const fetchProducts = async ()=>{
            try {
                const response = await axios.get('/api/users')
                setUserDta(response.data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }
        fetchProducts()
    },[])
    return {
        userData
    }
}

export default useCastomar
