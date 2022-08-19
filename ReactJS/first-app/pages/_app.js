import Navbar from '../src/components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
    </>
  )
}

export default MyApp
