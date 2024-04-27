import styled from 'styled-components';


interface UsernameGreetingProps {
  username: string
}

const GreetingStyle = styled.span`
  font-family: Inter;
  font-weight: 600;
  font-size: 22px;

  color: #6FCB14;
`;

const UsernameGreeting = ({username, ...props}: UsernameGreetingProps) => {

  const formUsername = (prevUsername: string): string => {
    
    const firstLetter = prevUsername.charAt(0).toUpperCase();
    const rest = prevUsername.substring(1, prevUsername.length + 1);
    
    return firstLetter + rest;
  };

  return <GreetingStyle {...props}>{formUsername(username)}</GreetingStyle>;
};

export default UsernameGreeting;
