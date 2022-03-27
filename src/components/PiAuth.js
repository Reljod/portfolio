import { Pi } from '@pinetwork-js/sdk';
import { useState, useEffect } from 'react';
import { getUser, login } from '../api/auth';
import '../styles/PiAuth.css'
import { useQuery } from 'react-query';

Pi.init({ version: '2.0', sandbox: true });

function formWelcomeText(username) {
  return `Welcome to the App, ${username}`;
} 

export default function Auth() {

  const {isLoading, data} = useQuery('getUser', getUser);

  const [isLoggedIn, setLogged] = useState(false);
  const [user, setUser] = useState({});
  const [formTitle, setFormTitle] = useState('Authenticate with Pi!');
  const [buttonClass, setButtonClass] = useState('AuthButtonActive');

  useEffect(() => {
    if (!isLoggedIn) {
      setButtonClass('AuthButtonActive');
    } else {
      setButtonClass('AuthButtonDisabled');
      setFormTitle(formWelcomeText(user.username));
    }
  }, [isLoggedIn, user]);

  useEffect(() => {
    if (!isLoading) {
      console.log(data);
      setUser({...data});
      if (data.hasToken){
        setLogged(true);
      }
    }
  }, [isLoading, data]);

  const authenticate = () => {
    const scopes = ['username','payments'];
  
    const onIncompletePaymentFound = (payment) => {
      alert("Incomplete Payment Found");
      return;
    }
  
    Pi.authenticate(scopes, onIncompletePaymentFound).then(
      (auth) => {
        const { username } = auth.user;
        const authFormTitle = formWelcomeText(username);
        setFormTitle(authFormTitle);
        setUser({...auth.user});
        setLogged(true);
        login(auth.accessToken);
        console.log(auth);
    }).catch(
      (error) => {
        console.log(error);
      }
    );
  }

  return (
    <>
      <p className='AuthTitle'>{ formTitle }</p>
      <button 
        className={'AuthButton ' + buttonClass}
        onClick={authenticate}
        disabled={isLoggedIn}
      >
        <p>Authenticate</p>
      </button>
    </>
  )
}