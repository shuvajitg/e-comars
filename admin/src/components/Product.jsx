import { useState } from 'react'
import { Plus, X, Pencil, Trash2 } from 'lucide-react'
import { Button } from "./ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import AddProduct from './addProduct'



function Products() {
    const [products, setProducts] = useState([
      { id: 1, name: 'Product 1', price: 19.99, stock: 100 },
      { id: 2, name: 'Product 2', price: 29.99, stock: 50 },
      { id: 3, name: 'Product 3', price: 39.99, stock: 75 },
    ])

    const [open, setOpen] = useState({
      add:false,
    })

    const addProductOpen = () => {
      setOpen(pre => ({
        ...pre,
        add:!pre.add,
      }))
    }
  
    const handleDelete = (id) => {
      setProducts(products.filter(product => product.id !== id))
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
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell><img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" height={"50px"} width={"50px"} className='rounded-sm' /></TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon">
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(product.id)}>
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