import React, { useEffect, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { InputSearch } from "./components/InputSearch";
import { GifContainer } from "./components/GifContainer";
import { Image } from '@chakra-ui/react'

const GIPHY_API_KEY = import.meta.env.VITE_GIPHY_TOKEN;

const searchGiphy = async (searchTerm: string) => {
  const url = new URL('https://api.giphy.com/v1/gifs/search')
  url.searchParams.set('api_key', GIPHY_API_KEY as string);
  url.searchParams.set('q', searchTerm);
  url.searchParams.set('limit', '10');

  try {
    const response = await fetch(url.toString());
    const { data } = await response.json();
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      error,
      data: []
    }
  }
}

interface Data {
  id: string;
  images: {
    original: {
      url: string;
    }
  }
  title: string;
}

export function App() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState <Data[]>([]);

  useEffect(() => {
    //Migrate this to useQuery hook
    const fetchData = async () => {
      const response = await searchGiphy(search)
      setData(response.data)
    };
    fetchData();
  }, [search])

  return (
    <Flex height="100vh" flexDirection="column"  alignItems="center" padding="1rem">
      <Box width="200px">
        <InputSearch onSearch={setSearch} />
      </Box>
      <GifContainer>
        {data?.map(({ id, images: { original: { url }}, title }) => (
          <Box key={id}>
            <Image src={url} alt={title} boxSize="200px" />
          </Box>
        ))}
      </GifContainer>
    </Flex>
  )
}