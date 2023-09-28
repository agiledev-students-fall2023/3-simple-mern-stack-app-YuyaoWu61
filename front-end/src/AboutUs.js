import { Link } from 'react-router-dom'
import './AboutUs.css'
import photo from "./avatar.jpg"
/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (
    <>
      <h1>Hi there!</h1>
      <p>This is a tab about us!</p>
      <p>The name is Yuyao, a senior student double majoring in computer science and game design.</p>
      <p>I play games, tennis, and watch movies as my hobbies.</p>
      
      
      {/* src = image; */}
     <img src={photo} alt='' width={425} height={579}></img>  
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs