import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <Flex as="header" justify="space-between" align="center" py={6} px={2}>
      <Heading> Header </Heading>
      <ColorModeSwitcher />
    </Flex>
  );
};
