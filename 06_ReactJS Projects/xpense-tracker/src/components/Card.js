import React from 'react'
import Button from './Button'

export default function Card(props) {
  return (
    <>
        <div className="card m-5 text-center bg-light">
                <h5 className="card-header">{props.title}</h5>
                <div className="card-body">
                    <h5 className="card-title">{props.subTitle}</h5>
                                                  

                </div>
            </div>
    </>
  )
}
