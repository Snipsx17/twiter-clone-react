import styled from 'styled-components';

const Button = styled.button`
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 50px;
  background-color: ${(props) =>
    props.$variant === 'primary' ? 'cornflowerblue' : 'white'};
  border: 1px solid cornflowerblue;
  font-size: 1rem;
  padding: 5px 10px;
  color: ${(props) =>
    props.$variant === 'primary' ? 'white' : 'cornflowerblue'};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export default Button;
