// app/layout.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, Flex, Select } from '@chakra-ui/react'

import cookieCutter from 'cookie-cutter'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <CacheProvider>
          <ChakraProvider>
            <Header />
            {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}

function Header(props: any) {
  const router = useRouter();
  const pathname = usePathname();
  const [ lang, setLang ] = useState();

  useEffect(() => {
    const langCookie = cookieCutter.get('preferred-language');
    setLang(langCookie);
  }, []);

  const onLanguageChange = (e: any) => {
    const language = e.target.value;
    setLang(language);
    cookieCutter.set('preferred-language', language, {path: '/'});

    const frags = pathname!.split('/');
    // 0th index is empty quotes, 1st index is the actual locale
    frags[1] = language;

    router.replace(frags.join('/'));
  }

  return (
    <Flex padding={5} justifyContent='space-between'>
      <div>Logo</div>

      <div>
        <Select onChange={onLanguageChange} value={lang}>
          <option value="en-in">English</option>
          <option value="fr">French</option>
        </Select>
      </div>
    </Flex>
  );
}