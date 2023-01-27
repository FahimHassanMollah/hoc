import React from 'react'
// import printProps from './hoc/printProps';
import withUser from './hoc/withUser';

const UserInfo = ({user}) => {
    const  {name} = user || {}
  return (
    <div>
        <h4> Name : {name }</h4>
        
    </div>
  )
}

export default withUser(UserInfo,1);