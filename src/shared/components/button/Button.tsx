import { Button as AntdButton } from 'antd' ;
import { ButtonProps } from 'antd/es/button/button';


const Button = ({...props}: ButtonProps) => {
  return (
    <AntdButton 
      {...props}
    />
  );
};

export default Button;
