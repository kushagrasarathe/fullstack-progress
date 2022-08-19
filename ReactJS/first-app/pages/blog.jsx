import React from "react";
import css from "../styles/blog.module.css";
// import '../styles/blog.css'
import Image from "next/image";
import pfp from '../src/assets/kushagra_sarathe.jpg'

export default function blog() {
  return (
    <>
      <div className={css.hello}>
        <h1 className={css.h1} id="h1">
          Test
        </h1>
      </div>
      {/* <img /> */}
      <div className={css.image}>
        <Image
            src='/kushagra_sarathe.jpg'
          width='200px'
          height='200px'
        //   layout='fill'
        //   src={'https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80'}
        />
      </div>
      <div id={css.id1}>Kushagra was here</div>
    </>
  );
}
