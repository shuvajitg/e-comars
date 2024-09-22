import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"


function Orders() {
    const orders = [
      { id: 1, customer: 'John Doe', total: 59.99, status: 'Completed' },
      { id: 2, customer: 'Jane Smith', total: 89.99, status: 'Processing' },
      { id: 3, customer: 'Bob Johnson', total: 39.99, status: 'Shipped' },
    ]
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Orders</h1>
        <Card>
          <CardHeader>
            <CardTitle>All Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>${order.total.toFixed(2)}</TableCell>
                    <TableCell>{order.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    )
  }

export default Orders