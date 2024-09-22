import { useState } from 'react'
import { Plus, X, Pencil, Trash2 } from 'lucide-react'
import { Button } from "./ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import AddProduct from './addProduct'
import useProduct from '@/hooks/useProduct'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


function Products() {
    const [open, setOpen] = useState({
      add:false,
    })
    const navigation = useNavigate()

    const addProductOpen = () => {
      setOpen(pre => ({
        ...pre,
        add:!pre.add,
      }))
    }
    const { productData } = useProduct()
    if (!productData){
      return <p>Loading...</p>
    }

    
    
    return (
      <div className={`p-4`}>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Products</h1>
          <Button onClick={addProductOpen}>
            {
              open.add? (
                <div className='flex items-center'>
                  <X className="mr-2 h-4 w-4" /> Close
                </div>
              ) : (
                <div className='flex items-center'>
                  <Plus className="mr-2 h-4 w-4 " /> Add Product
                </div>
              )
            }
          </Button>
        </div>
          {open.add && <AddProduct className={open.add ? `translate-y-0 absolute` : `hidden`}/>}
        <Card className={`${open.add ? "mt-12" : ""}`}>
          <CardHeader>
            <CardTitle>All Products</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow >
                  <TableHead>Title</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Demo Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productData?.data?.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.title}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>${product.demoPrice.toFixed(2)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell><img src={product.imageUrl} alt="" height={"50px"} width={"50px"} className='rounded-sm' /></TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" onClick={()=>toast("for your assignment",{
                        icon: "✍️",
                        style: {
                          borderRadius: "10px",
                          background: "#333",
                          color: "#009dff",
                        },
                      })}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={async()=>{
                        try {
                          await axios.delete(`/api/product/${product.id}`)
                          navigation('/products')
                          toast.success('Product deleted successfully')
                          return {productId:product.id}
                        } catch (error) {
                          toast.error(error.message)
                        }
                      }}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    )
  }

export default Products;