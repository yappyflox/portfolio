import * as React from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from 'components/Navbar'
import Hero from 'sections/Hero'
import About from 'sections/About'
import Skills from 'sections/Skills'
import Projects from 'sections/Projects'
import Contact from 'sections/Contact'

const App: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  )
}

export default App 