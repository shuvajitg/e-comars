import { useEffect, useState } from 'react'
import axios from 'axios'

const useProduct = () => {
    const [productData, setProductsData] = useState()
    useEffect(()=>{
        const fetchProducts = async ()=>{
            try {
                const response = await axios.get('/api/products')
                setProductsData(response.data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }
        fetchProducts()
    },[])
    return {
        productData
    }
}

export default useProduct
