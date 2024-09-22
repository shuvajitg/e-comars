import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"



function Profile() {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Admin Profile</h1>
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input id="name" defaultValue="Admin User" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input id="email" type="email" defaultValue="admin@example.com" />
              </div>
              <Button>Update Profile</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

export default Profile;