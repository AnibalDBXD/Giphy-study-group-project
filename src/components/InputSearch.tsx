import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { InputGroup, InputLeftElement, Input, InputProps } from '@chakra-ui/react'

export const InputSearch: React.FC<InputProps> = (props) => {
  return (
    <InputGroup>
        <InputLeftElement><SearchIcon /></InputLeftElement>
        <Input {...props} backgroundColor="gray.50" placeholder='Search GIPHY' />
    </InputGroup>
  )
}