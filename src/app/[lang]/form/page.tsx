'use client'

import { getURL } from '@/utils/i18n';
import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Input, Select, Text } from '@chakra-ui/react'
import Link from 'next/link';

import { getDictionary } from '../dictionary';

export default async function Page(props: any) {
  const lang = props.params.lang;
  const dict = await getDictionary(lang);

  return (
    <>
      <div style={{maxWidth: 500, margin: 'auto'}}>
        <p>Language: <b>{lang}</b></p>
        <FormControl>
          <FormLabel>{dict.form.labels.email}</FormLabel>
          <Input type='email' />
          <FormHelperText>{dict.form.helpers.email}</FormHelperText>
        </FormControl>

        <FormControl mt={10}>
          <FormLabel>{dict.form.labels.phone}</FormLabel>
          <Input type='tel' />
          <FormHelperText>{dict.form.helpers.phone}</FormHelperText>
        </FormControl>

        <Box mt={4}>
          <Link href={getURL('/url', lang)}>
            <Text color='blue' textDecoration='underline'>Test URL</Text>
          </Link>
        </Box>

        <Box mt={5}>
          <Button colorScheme='blue'>{dict.form.buttons.submit}</Button>
        </Box>
      </div>
    </>
  )
}