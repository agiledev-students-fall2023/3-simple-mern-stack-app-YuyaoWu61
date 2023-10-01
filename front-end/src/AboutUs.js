import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { report, response } from '../../back-end/app'
import './AboutUs.css'
// import photo from "./avatar.jpg"
/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  const [introInfo, setIntroInfo] = useState('')
  const [imageLink, setImageLink] = useState('')

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
      .then(response => {
        setIntroInfo(response.data.introInfo)
        // console.log(introInfo)
        setImageLink(response.data.imageLink)
      })
      .catch(error => {
        console.error('failed to retrieve info: ', error)
      })
  }, [])

  return (
    <>
      <h1>Hi there!</h1>
      <p>{introInfo}</p>

      <img  
        src = 
        {`${process.env.REACT_APP_SERVER_HOSTNAME}${imageLink}`}
        alt = "Yuyao Wu"
        height={579}
        width={425}
        /* src = image;
      <img src={photo} alt='' width={425} height={579}></img>   */
      />
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs