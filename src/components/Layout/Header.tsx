import React from "react";
import { Container, Box, Flex, Heading } from "@chakra-ui/react";
import { Logo } from "../../Logo";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  return (
    <Box as="header" py={6}>
      <Container maxW="4xl" px={4}>
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <Heading size="md"> Header </Heading>
            <a
              href="https://chakra-ui.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Box w={10} h={10} p={1} mx={2}>
                <Logo />
              </Box>
            </a>
          </Flex>

          <Flex>
            <ColorModeSwitcher />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
