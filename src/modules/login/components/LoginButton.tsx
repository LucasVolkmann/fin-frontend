import { Button } from 'antd';

const inputStyle: React.CSSProperties = {
  padding: '12px 18px',
  borderRadius: '30px',
  fontSize: '16px',
  width: '100%',
  height: '100%',
};

const LoginButton = ({...props}) => {
  return <Button type="primary" {...props} style={inputStyle}>Acessar conta</Button>;
};

export default LoginButton;
