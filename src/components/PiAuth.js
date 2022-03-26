// import { Pi } from '@pinetwork-js/sdk';
import { useState, useCallback, useEffect } from 'react';
import '../styles/PiAuth.css'


export default function Auth() {

  const [isLoggedIn, setLogged] = useState(false);
  const [formTitle, setFormTitle] = useState('Authenticate with Pi!');
  const [buttonClass, setButtonClass] = useState('AuthButtonActive');

  // Pi.init({ version: '2.0'});

  // const authenticate = () => {
  //   const scopes = ['payments'];
  
  //   const onIncompletePaymentFound = (payment) => {
  //     alert("Incomplete Payment Found");
  //     return;
  //   }
  
  //   Pi.authenticate(scopes, onIncompletePaymentFound).then(
  //     (auth) => {
  //       const { username } = auth.user;
  //       const authFormTitle = `Welcome to the App, ${username}`;
  //       setFormTitle(authFormTitle);
  //       console.log(auth);
  //   }).catch(
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  useEffect(() => {
    if (!isLoggedIn) {
      setButtonClass('AuthButtonActive')
    } else {
      setButtonClass('AuthButtonDisabled')
    }
  }, [isLoggedIn])

  const onAuthenticate = useCallback(
    (title) => {
      setFormTitle(title);
      setLogged(true);
      console.log("Is logged in?:", isLoggedIn);
    }
  , [isLoggedIn]);

  return (
    <>
      <p className='AuthTitle'>{ formTitle }</p>
      <button 
        className={'AuthButton ' + buttonClass}
        onClick={() => onAuthenticate("Welcome to Pi, Reljod!")}
        disabled={isLoggedIn}
      >
        <p>Authenticate</p>
      </button>
    </>
  )
}