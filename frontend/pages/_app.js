import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div className="font-mono flex flex-col">
      <Navbar />
      <Component {...pageProps} />
      </div>
    </ChakraProvider>
  )
}

export default MyApp
