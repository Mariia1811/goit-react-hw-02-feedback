import styled from 'styled-components';

export const ButtonList = styled.ul`
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 32px;
  list-style: none;
`;

export const Button = styled.button`
  padding: 24px;
  font-size: 16px;
  background-color: blanchedalmond;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transform: scale(1);
  overflow: hidden;
  &:hover,
  &:focus {
    box-shadow: 3px 2px 5px 5px #766a6a;
  }
`;
