import '../styles/Greetings.css';
import piLogo from '../pi-icon.png'

export default function Greetings({ text }) {
  return (
    <div className='Greet'>
      <img 
        src={piLogo} 
        alt="pi logo"
        className='GreetImage'
      />
      <h1 className="GreetText">
        { text }
      </h1>
    </div>
  )
}