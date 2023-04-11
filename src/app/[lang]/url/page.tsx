'use client'

import { Box, Button, Flex, FormControl, FormHelperText, FormLabel, Input, Select } from '@chakra-ui/react'

  import { getDictionary } from '../dictionary';

export default async function Page(props: any) {
  const lang = props.params.lang;

  return (
    <>
      <div style={{maxWidth: 500, margin: 'auto'}}>
        <p>Language: <b>{lang}</b></p>

        <b>Link test!</b>
      </div>
    </>
  )
}