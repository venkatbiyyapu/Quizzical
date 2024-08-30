import React from "react"
import yellowBlob from "../images/yellow-blob.png"
import blueBlob from "../images/blue-blob.png"
import Form from "./Form"

export default function Home(props){
    return ( 
    <div>
        <div className="container">
          <h1 className="title">Quizzical!!</h1>
          <p className="description"> 
            It’s time to boost your general knowledge, 
            upgrade your general facts, 
            and get the skills to run your very own epic quiz.
          </p>
          <Form props={props}/>
        </div>
        <img className='yellowBlob' src={yellowBlob} />
        <img className='blueBlob' src={blueBlob} />
      </div>
      )
}