import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

interface FooterProps {}

export const Footer = (props: FooterProps) => {
  return (
    <Flex as="footer" py={6} justify="center">
      <Heading> Footer </Heading>
    </Flex>
  );
};
