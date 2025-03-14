import React from 'react'
import { Box, Container, Heading, SimpleGrid, Text, Icon, VStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaReact, FaJs, FaHtml5, FaCss3, FaGit, FaNode } from 'react-icons/fa'
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const MotionBox = motion(Box)

const SkillCard = ({ icon, title }: { icon: React.ElementType; title: string }) => {
  const cardBg = useColorModeValue('white', 'gray.700')
  
  return (
    <VStack
      p={5}
      bg={cardBg}
      borderRadius="lg"
      boxShadow="md"
      transition="transform 0.2s"
      _hover={{ transform: 'translateY(-5px)' }}
    >
      <Icon as={icon} w={10} h={10} color="blue.500" />
      <Text fontWeight="medium">{title}</Text>
    </VStack>
  )
}

const Skills = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const textColor = useColorModeValue('gray.800', 'white')

  const skills = [
    { icon: FaReact, title: 'React' },
    { icon: SiTypescript, title: 'TypeScript' },
    { icon: FaJs, title: 'JavaScript' },
    { icon: FaHtml5, title: 'HTML5' },
    { icon: FaCss3, title: 'CSS3' },
    { icon: SiTailwindcss, title: 'Tailwind CSS' },
    { icon: FaNode, title: 'Node.js' },
    { icon: SiNextdotjs, title: 'Next.js' },
    { icon: FaGit, title: 'Git' }
  ]

  return (
    <Box
      as="section"
      id="skills"
      py={20}
      bg={bgColor}
      color={textColor}
    >
      <Container maxW="container.lg">
        <MotionBox
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h2" size="xl" mb={12}>
            Skills & Technologies
          </Heading>

          <SimpleGrid columns={{ base: 2, md: 3 }} spacing={8}>
            {skills.map((skill, index) => (
              <MotionBox
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <SkillCard {...skill} />
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  )
}

export default Skills 