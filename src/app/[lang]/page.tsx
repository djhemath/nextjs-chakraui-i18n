'use client'
import { getURL } from '@/utils/i18n';
import { Link } from '@chakra-ui/next-js'
import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Input, Select } from '@chakra-ui/react'

export default function Page(props: any) {
  const lang = props.params.lang;

  return (
    <Flex height='calc(100vh - 100px)' justifyContent='center' alignItems='center'>
      <Link href={getURL('/form', lang)}>Go to form</Link>
    </Flex>
  )
}
