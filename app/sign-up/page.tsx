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
              Making Hizruboys,
              <br />
              more hizru !!
            </h1>
          </div>

        </div>
      </div>

      {/* Right Column */}
      <div className="flex items-center justify-center p-8">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Create an account</h2>
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

