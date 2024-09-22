import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Switch } from "./ui/switch";

function Settings() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Enable notifications</span>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <span>Enable two-factor authentication</span>
              <Switch />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Settings;
