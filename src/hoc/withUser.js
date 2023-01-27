import axios from 'axios';
import React, { useEffect, useState } from 'react'

const withUser = (Component,userId) => {
  return (props) => {
    const [user, setUser] = useState({});
    useEffect(() => {
    (async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        setUser(response.data);
    })();
    
    
    }, [])
    
    return <Component user={user} {...props}/>
  }
}

export default withUser