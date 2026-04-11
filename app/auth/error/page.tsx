import Link from "next/link"
import { ChefHat, AlertCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AuthErrorPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
            <ChefHat className="h-7 w-7 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-foreground">Ostwise</span>
            <span className="text-xs font-medium text-primary -mt-1">EVENT</span>
          </div>
        </Link>

        <Card className="border-destructive/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
            <CardTitle className="text-2xl">Authentication Error</CardTitle>
            <CardDescription className="text-base">
              Something went wrong during authentication
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-muted-foreground">
              We encountered an error while trying to authenticate you. This could be due to an expired link or a temporary issue.
            </p>

            <div className="flex flex-col gap-3">
              <Link href="/auth/login">
                <Button className="w-full bg-primary text-primary-foreground">
                  Try Again
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full border-border">
                  Back to Home
                </Button>
              </Link>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              If this problem persists, please{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact support
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
