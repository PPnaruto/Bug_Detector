import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
  } from '@chakra-ui/react'
  import { FiMenu } from 'react-icons/fi'
  import { Logo } from './Logo'
  
  export const Navbar = () => {
    const isDesktop = useBreakpointValue({
      base: false,
      lg: true,
    })
    return (
      <Box
        as="section"
        pb={{
          base: '12',
          md: '24',
        }}
      >
        <Box as="nav" bg="bg-surface" boxShadow="sm" border="1px solid red">
          <Container
            py={{
              base: '4',
              lg: '5',
            }}
            border="1px solid black"
            width="80%"
          >
            <HStack spacing="5" justify="space-between" flex='1' border="1px solid red">
              <Logo />
              {isDesktop ? (
                <Flex justify="space-between" flex="1">
                  <ButtonGroup variant="link" spacing="8">
                    {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                      <Button key={item}>{item}</Button>
                    ))}
                  </ButtonGroup>
                  <HStack spacing="3" border="1px solid red">
                    <Button variant="ghost">Sign in</Button>
                    <Button variant="primary">Sign up</Button>
                  </HStack>
                </Flex>
              ) : (
                <IconButton
                  variant="ghost"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    )
  }