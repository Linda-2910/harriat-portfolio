import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FooterContainer = styled(Box)`
scroll-margin-top: 8rem;
  padding: 0 1.5rem 2rem;
  background: #f6efe7;
  border-top: 2px solid #c9ae81;
  font-family: 'Inter', sans-serif;
  color: #4a2e2e;
  position: relative;
 border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;
export const ContactBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start; 
  gap: 1rem;
  flex-wrap: wrap;
  padding-right: 2rem; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;


export const InfoLine = styled(Box)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const NewsletterBox = styled(Box)`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  .MuiOutlinedInput-root {
    border-radius: 12px;
    background: white;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }

  input {
    padding: 0.8rem 1.2rem;
    font-size: 1rem;
  }
`;

export const TextWrapper = styled(Box)`
  max-width: 30vw;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const NewsletterContainer = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  padding: 1.5rem 2rem;

  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;

    ${NewsletterBox}, ${TextWrapper}, ${ContactBox} {
      width: 100%;
    }
  }
`;

export const HeaderText = styled(Typography)`
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #3c1e1e;
`;

export const SubText = styled(Typography)`
  font-size: 1rem;
  color: #6e4c4c;
`;
export const FooterContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px; 
  margin: 0 auto;           
  padding: 3rem 2rem;
  color: #3b2626;     

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
  }
`;

export const LeftGrid = styled(Box)`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
`;

export const Section = styled(Box)`
  display: flex;
  flex-direction: column;
`;
export const LinkItem = motion(styled('span')`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary.dark};
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  font-weight: 500;
  display: inline-block;
  transition: all 0.35s ease;

  &:hover {
    transform: scale(1.05);
    text-shadow: 0 1px 6px rgba(0, 0, 0, 0.1), 0 0 3px rgba(255, 255, 255, 0.3);
  }
`);

export const RightWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SocialIcons = styled(Box)`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const PaymentIcons = styled(Box)`
  display: flex;
  gap: 1rem;
`;

export const HoverIcon = motion(styled(Box)`
  font-size: 1.8rem;
  cursor: pointer;
  color:${({ theme }) => theme.palette.secondary.dark};

  &:hover {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`);


export const Copyright = styled(Typography)`
  margin-top: 2rem;
  font-size: 0.85rem;
  text-align: center;
  color: #987c6c;
`;