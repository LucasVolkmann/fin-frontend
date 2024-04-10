import { Input } from 'antd';

const inputStyle = {
  padding: '12px 18px',
  borderRadius: '30px',
  fontSize: '16px',
};

const LoginInputPassword = ({...props}) => {
  return <Input.Password {...props} style={inputStyle}></Input.Password>;
};

export default LoginInputPassword;
