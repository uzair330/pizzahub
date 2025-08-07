"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, Mail, Lock, AlertTriangle } from "lucide-react";
import Link from "next/link";


const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate admin authentication
    setTimeout(() => {
      setIsLoading(false);
      console.log("Admin login attempted:", formData);
      // Redirect to admin dashboard on success
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-warm flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <Card className="shadow-elegant border-0">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 bg-destructive rounded-full">
                <Shield className="h-8 w-8 text-destructive-foreground" />
              </div>
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-foreground">
                Admin Access
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Secure login for restaurant administrators only
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <Alert className="border-destructive/20 bg-destructive/5">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <AlertDescription className="text-destructive">
                This area is restricted to authorized personnel only. 
                All access attempts are logged and monitored.
              </AlertDescription>
            </Alert>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Admin Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="admin@bellapizza.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Admin Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter secure password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground font-semibold py-3"
              >
                {isLoading ? "Authenticating..." : "Access Admin Panel"}
              </Button>
            </form>

            <div className="space-y-4">
              <div className="text-center">
                <Button variant="link" className="text-muted-foreground hover:text-primary text-sm">
                  Contact IT Support
                </Button>
              </div>

              <div className="text-center pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Regular customer?{" "}
                  <Link href="/login" className="text-primary hover:text-primary-hover font-medium">
                    Customer Login
                  </Link>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground bg-card p-4 rounded-lg shadow-soft">
            <Shield className="h-3 w-3 inline mr-1" />
            Secured with 256-bit SSL encryption. This session is being monitored for security purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;