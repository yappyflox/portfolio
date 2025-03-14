import * as React from 'react'
import { Box, Container, Heading, Text, VStack, HStack, useColorModeValue, Icon, SimpleGrid } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaChartLine, FaUsers, FaLightbulb, FaTasks, FaChartBar, FaHandshake } from 'react-icons/fa'

const MotionBox = motion(Box)

const Skills: React.FC = () => {
  const textColor = useColorModeValue('gray.800', 'white')
  const bgColor = useColorModeValue('white', 'gray.800')
  const accentColor = useColorModeValue('brand.500', 'brand.300')

  const skills = [
    {
      icon: FaChartLine,
      title: 'Product Strategy',
      description: 'Developing comprehensive product roadmaps and strategic vision'
    },
    {
      icon: FaUsers,
      title: 'User Research',
      description: 'Conducting user interviews, surveys, and usability testing'
    },
    {
      icon: FaLightbulb,
      title: 'Product Innovation',
      description: 'Identifying market opportunities and innovative solutions'
    },
    {
      icon: FaTasks,
      title: 'Agile Management',
      description: 'Leading sprint planning and agile development processes'
    },
    {
      icon: FaChartBar,
      title: 'Data Analysis',
      description: 'Analyzing metrics and making data-driven decisions'
    },
    {
      icon: FaHandshake,
      title: 'Stakeholder Management',
      description: 'Building relationships with stakeholders and cross-functional teams'
    }
  ]

  return (
    <Box as="section" id="skills" py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            textAlign="center"
          >
            <Text color={accentColor} fontWeight="bold" fontSize="lg" mb={2}>
              Skills & Expertise
            </Text>
            <Heading as="h2" size="2xl" color={textColor} mb={4}>
              Product Management
            </Heading>
            <Text fontSize="lg" color={textColor} opacity={0.8} maxW="800px">
              I bring a unique blend of technical knowledge and business acumen to drive product success
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
            {skills.map((skill, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  p={6}
                  borderRadius="lg"
                  bg={useColorModeValue('gray.50', 'gray.700')}
                  _hover={{ transform: 'translateY(-4px)', transition: 'all 0.2s' }}
                  height="100%"
                >
                  <Icon as={skill.icon} w={8} h={8} color={accentColor} mb={4} />
                  <Text fontWeight="bold" color={textColor} mb={2} fontSize="xl">
                    {skill.title}
                  </Text>
                  <Text color={textColor} opacity={0.8}>
                    {skill.description}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Skills 