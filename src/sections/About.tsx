import * as React from 'react'
import { Box, Container, Heading, Text, VStack, Stack, useColorModeValue, Image, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const About: React.FC = () => {
  const textColor = useColorModeValue('gray.800', 'white')
  const bgColor = useColorModeValue('white', 'gray.800')
  const accentColor = useColorModeValue('brand.500', 'brand.300')

  return (
    <Box as="section" id="about" py={{ base: 12, md: 20 }} bg={bgColor}>
      <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
        <Stack 
          direction={{ base: "column", lg: "row" }} 
          spacing={{ base: 8, lg: 16 }} 
          align="center"
        >
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box 
              position="relative" 
              maxW={{ base: "280px", md: "360px" }}
              mx={{ base: "auto", lg: 0 }}
            >
              <Image
                src="/profile.jpg"
                alt="Profile"
                borderRadius="2xl"
                w="full"
                h={{ base: "280px", md: "360px" }}
                objectFit="cover"
                fallback={
                  <Box 
                    w="full" 
                    h={{ base: "280px", md: "360px" }} 
                    bg={accentColor} 
                    opacity={0.1} 
                    borderRadius="2xl" 
                  />
                }
              />
              <Box
                position="absolute"
                top="-4"
                right="-4"
                bottom="4"
                left="4"
                borderRadius="2xl"
                border="2px"
                borderColor={accentColor}
                zIndex={-1}
              />
            </Box>
          </MotionBox>

          <VStack 
            flex={1} 
            align={{ base: "center", lg: "start" }} 
            textAlign={{ base: "center", lg: "left" }}
            spacing={{ base: 6, md: 8 }}
          >
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Text color={accentColor} fontWeight="bold" fontSize={{ base: "md", md: "lg" }} mb={2}>
                About Me
              </Text>
              <Heading as="h2" size={{ base: "xl", md: "2xl" }} color={textColor} mb={4}>
                Product Manager & Strategist
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color={textColor} opacity={0.8} lineHeight="tall">
                As a Product Manager with over 5 years of experience, I specialize in leading cross-functional teams to deliver innovative solutions that drive business growth and enhance user experience. My approach combines data-driven decision making with user-centered design principles.
              </Text>
            </MotionBox>

            <SimpleGrid 
              columns={{ base: 1, sm: 2 }} 
              spacing={{ base: 4, md: 6 }} 
              w="full"
            >
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box>
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color={textColor} mb={1}>
                    Experience
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} color={textColor} opacity={0.8}>
                    5+ Years in Product
                  </Text>
                </Box>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Box>
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color={textColor} mb={1}>
                    Projects Delivered
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} color={textColor} opacity={0.8}>
                    20+ Successful Products
                  </Text>
                </Box>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Box>
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color={textColor} mb={1}>
                    Industries
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} color={textColor} opacity={0.8}>
                    Tech, E-commerce, SaaS
                  </Text>
                </Box>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Box>
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" color={textColor} mb={1}>
                    Team Leadership
                  </Text>
                  <Text fontSize={{ base: "md", md: "lg" }} color={textColor} opacity={0.8}>
                    Led 10+ Agile Teams
                  </Text>
                </Box>
              </MotionBox>
            </SimpleGrid>
          </VStack>
        </Stack>
      </Container>
    </Box>
  )
}

export default About 