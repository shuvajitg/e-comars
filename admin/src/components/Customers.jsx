import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"



function Customers() {
    const customers = [
      { id: 1, name: 'John Doe', email: 'john@example.com', orders: 5 },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', orders: 3 },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', orders: 7 },
    ]
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Customers</h1>
        <Card>
          <CardHeader>
            <CardTitle>All Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Total Orders</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.orders}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    )
  }

export default Customers