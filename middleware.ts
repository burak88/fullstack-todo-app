export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/board"],
  // matcher: ["/((?!register|api|login).*)"],
};