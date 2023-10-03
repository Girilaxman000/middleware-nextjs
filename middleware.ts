import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated } from "./utils/isAuth";

export const config = {
  matcher: ["/about/:path*"],
};

export function middleware(req: NextRequest) {
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }
}
