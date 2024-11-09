import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes = createRouteMatcher([
    '/',
    '/upcoming',
    '/previous',
    '/personal-room',
    '/recordings',
    '/meeting(.*)',
    '/pages/api/webhooks/clerk',
])

export default clerkMiddleware((auth, req) => {
    if(protectedRoutes(req)) auth().protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};