import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row overflow-hidden bg-white">
      {/* Pictorial Side */}
      <div className="relative hidden w-1/2 lg:flex flex-col bg-secondary">
        <div className="absolute inset-0 z-0">
          {/* We'll use a placeholder colored div with a formal pattern/image later, currently just a formal blue/green tone or image placeholder */}
          <div className="absolute inset-0 bg-primary/5"></div>
          {/* We would place a real image of Busia here. Mocking with standard Next.js image placeholder layout */}
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-muted-foreground p-12 text-center">
            [Busia County Pictorial Area]
          </div>
        </div>
      </div>

      {/* Auth Side */}
      <div className="flex w-full flex-1 flex-col px-8 py-12 sm:px-12 lg:w-1/2 lg:px-24 xl:px-32">
        <div className="flex-1 flex flex-col justify-center mx-auto w-full max-w-md">
          {/* Header */}
          <div className="mb-10 text-center flex flex-col items-center">
            <div className="relative mb-6 h-32 w-32">
              {/* Logo from public/logo.png */}
              <Image src="/logo.png" alt="Busia County Logo" fill className="object-contain" />
            </div>
            <h1 className="mb-2 text-3xl font-semibold text-foreground tracking-tight">
              Busia County RMIS
            </h1>
            <p className="text-muted-foreground">
              Revenue Management Information System
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6" action="/dashboard" method="GET">
            <div className="space-y-2">
              <label
                htmlFor="identifier"
                className="text-sm font-medium text-foreground"
              >
                Phone Number / Email Address
              </label>
              <input
                id="identifier"
                name="identifier"
                type="text"
                placeholder="e.g. 0712345678 or user@busiacounty.go.ke"
                className="w-full rounded-lg border border-border px-4 py-2.5 text-[15px] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-foreground"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-accent hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-border px-4 py-2.5 text-[15px] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-3 px-4 text-center font-medium text-white shadow-sm hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} County Government of Busia. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
