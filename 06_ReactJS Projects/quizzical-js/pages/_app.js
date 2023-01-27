import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <div>
        <div className="area" >
          <ul className="circles"> */}
            <Component {...pageProps} />
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
