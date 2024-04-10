import Input from 'antd/es/input/Input';

const inputStyle = {
  padding: '12px 18px',
  borderRadius: '30px',
  fontSize: '16px',
};
const LoginInputEmail = ({...props}) => {
  return <Input {...props} style={inputStyle}></Input>;
};

export default LoginInputEmail;
