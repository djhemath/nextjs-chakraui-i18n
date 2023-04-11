import { NextRequest, NextResponse } from "next/server";
const locales = [ 'en-us', 'en-in', 'fr' ];

function getLocale(request: NextRequest) {
    const defaultLocale = 'en-in';
    const acceptLanguage = request.headers.get('accept-language') || defaultLocale;
    const acceptLanguages = acceptLanguage.split(',');

    if(locales.includes(acceptLanguage[0])) {
        return acceptLanguages[0].toLocaleLowerCase();
    } else {
        return defaultLocale;
    }
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
    );

    if(pathnameIsMissingLocale) {
        const langCookie = request.cookies.get('preferred-language');

        let locale = '';

        if(langCookie && langCookie.value) {
            locale = langCookie.value;
        } else {
            locale = getLocale(request);
        }

        return NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url)
        );
    }
}

export const config = {
    matcher: [
      // Skip all internal paths (_next)
      '/((?!_next).*)',
      // Optional: only run on root (/) URL
      // '/'
    ],
  }