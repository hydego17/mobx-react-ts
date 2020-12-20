import React, { ReactNode } from 'react';

import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';

import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Box as="main" px={2} minH="100vh">
        {children}
      </Box>
      <Footer />
    </ChakraProvider>
  );
};
