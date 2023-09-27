import styled from 'styled-components';

export const SearchbarContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 4px 0 0 4px;
`;

export const SearchButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
