import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated } from "./utils/isAuth";

const protectedRoutes = ["/about"];

export function middleware(req: NextRequest) {
  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    console.log(req.nextUrl.origin);
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }
}
