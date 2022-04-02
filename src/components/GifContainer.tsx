import { SimpleGrid } from "@chakra-ui/react";
import React from "react";

export const GifContainer: React.FC = ({ children }) => {
  return (
    <SimpleGrid columns={3} spacing={10}>
     {children}
    </SimpleGrid>
  )
}