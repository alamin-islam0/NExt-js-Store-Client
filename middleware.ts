import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  
  // Define protected routes
  const isProtectedRoute = path.startsWith('/add-item')
  
  // Define public routes that should not be accessed if already logged in (optional but good UX)
  const isAuthRoute = path.startsWith('/login')

  // Get the token from the cookies
  // In a real app, you might validte this token with the backend
  const token = request.cookies.get('auth_token')?.value

  // Redirect to login if accessing protected route without token
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect to items list if accessing login page while already logged in
  if (isAuthRoute && token) {
     return NextResponse.redirect(new URL('/items', request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/add-item/:path*', '/login'],
}
