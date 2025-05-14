import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  // Get the pathname from the URL
  const path = req.nextUrl.pathname

  // Create a cookie to store the original path for redirects
  if (path.startsWith("/admin") && !path.includes("login")) {
    res.cookies.set("originalPath", path, {
      path: "/",
      maxAge: 60 * 5, // 5 minutes
      httpOnly: true,
      sameSite: "lax",
    })
  }

  // For client-side auth checks, we'll rely on the client-side auth context
  // This middleware will only handle redirects for non-authenticated paths

  // Special case for dashboard to prevent redirect loops
  if (path === "/admin/dashboard") {
    // We'll let the client-side auth context handle this
    return res
  }

  // If user is already logged in and tries to access login page, redirect to dashboard
  // This will be handled by the client-side auth context

  const response = NextResponse.next()

  // Add a custom header to indicate this is a page navigation
  // This can be used by client-side code to detect navigation
  response.headers.set("x-navigation-type", "page")

  return response
}

// Only run the middleware on page navigations
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - api routes
     */
    "/((?!_next/static|_next/image|favicon.ico|public|api).*)",
    "/admin/:path*",
  ],
}
