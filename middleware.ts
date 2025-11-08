import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url  = req.nextUrl;
  const password = req.cookies.get("password")?.value;

  // Allow access to login page or static files
  if (
    url.pathname === '/login' ||
    url.pathname.star
  )

}