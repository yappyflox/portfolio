import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#f2f5f3',
      100: '#e4e9e6',
      200: '#c8d3cc',
      300: '#a7b8ad',
      400: '#859c8d',
      500: '#68806f', // Main sage green
      600: '#4d6153',
      700: '#3c4b41',
      800: '#2b362f',
      900: '#1a211c',
    },
    sage: {
      50: '#f4f7f4',
      100: '#e6ebe6',
      200: '#ccd8cd',
      300: '#b1c4b3',
      400: '#95ad98',
      500: '#7a967d', // Lighter sage green
      600: '#5f7961',
      700: '#4b5f4c',
      800: '#374538',
      900: '#222b23',
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'sage.900' : 'white',
        color: props.colorMode === 'dark' ? 'sage.50' : 'gray.800',
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'sage',
      },
    },
    Container: {
      baseStyle: {
        maxW: 'container.xl',
      },
    },
  },
})

export default theme 