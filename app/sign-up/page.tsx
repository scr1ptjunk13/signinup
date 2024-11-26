import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignUpPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
      {/* Left Column */}
      <div className="relative hidden lg:block">
        <div className="absolute inset-0 bg-purple-900/90">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Desert landscape"
            className="h-full w-full object-cover opacity-50 mix-blend-overlay"
            width={1920}
            height={1080}
            priority
          />
        </div>
        <div className="relative flex h-full flex-col">
          <div className="p-8">
            <Link href="/" className="text-2xl font-bold text-white">
              AMU
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-center p-8">
            <h1 className="text-center text-3xl font-medium leading-tight text-white">
              Capturing Moments,
              <br />
              Creating Memories
            </h1>
          </div>
          <div className="p-8 text-center">
            <div className="flex justify-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-white/30" />
              <div className="h-2 w-2 rounded-full bg-white/30" />
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex items-center justify-center p-8">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Create an account</h2>
            <Link href="/back-to-website" className="text-sm text-muted-foreground hover:text-primary">
              Back to website →
            </Link>
          </div>
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="First name" />
              <Input placeholder="Last name" />
            </div>
            <Input type="email" placeholder="Email" />
            <div className="relative">
              <Input type="password" placeholder="Enter your password" />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-2"
              >
                <EyeIcon className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm leading-none">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms & Conditions
                </Link>
              </label>
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Create account</Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or register with</span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Button variant="outline">
                <GoogleIcon className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline">
                <AppleIcon className="mr-2 h-4 w-4" />
                Apple
              </Button>
            </div>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8q0-.825.588-1.413T14 10q.825 0 1.413.588T16 12q0 .825-.588 1.413T14 14q-.825 0-1.413-.588T12 12"
      />
    </svg>
  )
}

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"
      />
    </svg>
  )
}

