import Footer from '@/components/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <div>
        <div className="area" >
          <ul className="circles"> */}
          <Footer>
            <Component {...pageProps} />
            </Footer>
            {/* <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
      </div> */}
    </>
  )

}
