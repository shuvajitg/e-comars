import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import useCastomar from "@/hooks/useCastomar"



function Customers() {
    const { userData } = useCastomar()
    
  
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
                  <TableHead>Number</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Total Orders</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userData?.data?.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>{customer.number}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>0</TableCell>
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