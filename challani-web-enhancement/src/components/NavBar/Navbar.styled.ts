import { Box, IconButton, OutlinedInput } from '@mui/material';
import { styled } from 'styled-components';

export const NavContainer = styled(Box)`
scroll-margin-top: 8rem;
  width: 100%;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
background: rgba(240, 222, 200, 0.85);
 backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;
export const Logo = styled.img`
  height: 48px;
  object-fit: contain;
  cursor: pointer;
`;

export const IconsWrapper = styled(Box)`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const StyledIconButton = styled(IconButton)`
  color: #6e4e2f;
  transition: 0.3s ease;

  &:hover {
    color: #b08d57;
  }
`;
export const SearchWrapper = styled(Box)`
  flex: 1;
  margin: 0 2rem;
  max-width: 420px;
`;

export const StyledSearchInput = styled(OutlinedInput)`
  width: 100%;
  border-radius: 12px;
  padding-left: 0.5rem;
  background: linear-gradient(135deg, #fdf6f0, #f6f0ff);
  color: #5c3c3c;
    .MuiOutlinedInput-input {
    padding: 12px 16px;
  }
  &:focus-visible {
    outline: none;
  }

  &.Mui-focused fieldset {
    border:none;
    box-shadow: 0 0 12px rgba(94, 43, 151, 0.35) !important;
  }

  & fieldset {
    border: 1.5px solid #d8c0a0;
    transition: box-shadow 0.3s ease, border-color 0.3s ease;
  }

  &:hover fieldset {
    border-color: #a98c66;
    box-shadow: 0 2px 10px rgba(169, 140, 102, 0.2);
  }

  input::placeholder {
    color: #947e91;
    font-style: italic;
    font-weight: 500;
    opacity: 1;
  }
  svg {
    color: #a98c66;
  }
`;


