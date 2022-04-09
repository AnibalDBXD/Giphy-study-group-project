import React, { useState, useEffect } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { InputGroup, InputLeftElement, Input, InputProps } from '@chakra-ui/react'
import useDebounce from '../hooks';

interface ISearchProps extends InputProps {
  onSearch?: (value: any) => void;
}

export const InputSearch: React.FC<ISearchProps> = ({ onSearch, value, ...props }) => {
  const [inputValue, setInputValue] = useState(value);
  const debouncedValue = useDebounce(inputValue);

  useEffect(() => {
    onSearch?.(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <InputGroup>
        <InputLeftElement><SearchIcon /></InputLeftElement>
      <Input
        {...props}
        onChange={({ target }): void => setInputValue(target.value)}
        backgroundColor="gray.50"
        placeholder='Search GIPHY'
        value={inputValue}
      />
    </InputGroup>
  )
}