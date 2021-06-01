import React from 'react';
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'

const setRegData = (e, type) => {
  switch(type){
    case 'ID':
      return { id: e.target.value }
    case 'PW':
      return { password: e.target.value }
    case 'PWC':
      return { passwordCheck: e.target.value }
    default:
      return {}
  }
}

const Register = () => {
  const [regData, setData] = React.useState({})
  const history = useHistory();
  const onRegister = (Data) => {
    /* 
    ajax('urls', data)
    .then((r)=> {
      
    })
    .catch((e) => {
      console.log(e);
    })
    */
    history.push('/Login');
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid #DDDDDD', padding: '32px', borderRadius: '7px', background:'#84FF6B' }}>
          <div> 회원가입 </div>
          <div style={{margin: '8px 0', textAlign: 'left'}}> ID: </div>
          <input placeholder="Examples@email.com" value={regData.id} onChange={(e) => setData({ ...regData, ...setRegData(e, 'ID')})}></input>
          <div style={{margin: '8px 0', textAlign: 'left'}}> 비밀번호: </div>
          <input type="password" placeholder="Password" value={regData.password} onChange={(e) => setData({ ...regData, ...setRegData(e, 'PW')})}></input>
          <div style={{margin: '8px 0', textAlign: 'left'}}> 비밀번호 확인: </div>
          <input type="password" placeholder="Password Check" value={regData.passwordCheck} onChange={(e) => setData({ ...regData, ...setRegData(e, 'PWC')})}></input>
          <div style={{margin: '8px 0', textAlign: 'left'}}> SNS 계정: </div>
          <input type="text" placeholder="SNS 계정"></input>
          <Button style={{ margin: '8px 0'}} onClick={() => onRegister()}> 회원가입 </Button>
        </div>
      </div>
    </div>
  )
}

export default Register;