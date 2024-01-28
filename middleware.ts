import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/contact/success"],
};

export function middleware(request: NextRequest) {
  const referer = request.headers.get("referer");
  const refererUrl = new URL(referer || "", request.url);

  if (refererUrl.pathname !== "/contact") {
    return NextResponse.redirect(new URL("/contact", request.url));
  }
}
