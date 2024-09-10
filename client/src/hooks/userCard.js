import { useEffect, useState } from 'react'
import axios from 'axios'

const useCard = () => {
    const [userProductData, setUserProductsData] = useState()
    useEffect(()=>{
        const fetchProducts = async ()=>{
            try {
                const response = await axios.get('/api/user/getProductsByUserId')
                setUserProductsData(response.data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }
        fetchProducts()
    },[])
    return {
        userProductData
    }
}

export default useCard
