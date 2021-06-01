import React from 'react';
import Button from '../components/Button'
import { useHistory } from 'react-router-dom'

const setLoginData = (e, type) => {
  switch(type){
    case 'ID':
      return { id: e.target.value }
    case 'PW':
      return { password: e.target.value }
    default:
      return {}
  }
}

const Login = () => {
  const [loginData, setData] = React.useState({})
  var history = useHistory()
  
  const onLogin = () => {
    history.push('/')
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
          <div> 로그인 </div>
          <div style={{margin: '8px 0', textAlign: 'left'}} > ID: </div>
          <input placeholder="Examples@email.com" value={ loginData.id } onChange={(e) => setData({ ...loginData, ...setLoginData(e, 'ID')})}></input>
          <div style={{margin: '8px 0', textAlign: 'left'}}> 비밀번호: </div>
          <input type="password" value={ loginData.password } onChange={(e) => setData({ ...loginData, ...setLoginData(e, 'ID')})}></input>
          <Button style={{ margin: '8px 0'}} onClick={ () => { onLogin() } }> 로그인 </Button>
          <Button style={{ margin: '8px 0'}} onClick={()=>{history.push('/Register')}}> 회원가입 </Button>
        </div>
      </div>
    </div>
  )
}

export default Login;