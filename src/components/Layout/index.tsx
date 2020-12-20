import React, { ReactNode } from 'react';

import { ChakraProvider, Container, theme } from '@chakra-ui/react';

import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container as="main" px={4} minH="100vh" maxW="4xl">
        {children}
      </Container>
      <Footer />
    </ChakraProvider>
  );
};
