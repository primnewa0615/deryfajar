import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Secret from './Secret';
import Login from './login';

function PrivateRoute({path}) {
    const [element, setElement] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      return () => {
        if(localStorage.getItem('isLogin')){

            switch (path) {
                case '/secret':
                    setElement(<Secret />);
                default:
                    break;
            }
          }else{
            navigate('/')
            setElement(<Login />);
          }
      }
    }, [])
    return(
        <>
            {element}
        </>
    )
}

export default PrivateRoute