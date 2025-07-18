import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
interface StyledBoxProps {
  reverse?: boolean;
}
export const SectionContainer = styled(Box)`
scroll-margin-top: 8rem;
padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
background: rgba(240, 222, 200, 0.85);
  overflow: hidden;
width:100vw;
`;

export const Block = styled(Box) <StyledBoxProps>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: space-around;
gap: 1.5rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
  flex-direction: column;
}

`;

export const TextContent = styled(Box)`
  flex: 1;
  min-width: 280px;
  max-width: 500px;
  position: relative;
`;

export const ImageContainer = styled(motion.div)`
  flex: 1;
  min-width: 280px;
  max-width: 480px;
  border-radius: 1.5rem;
  overflow: hidden;
 box-shadow: 0 0 30px ${({ theme }) => theme.palette.primary.main}40;
 transform-style: preserve-3d;
`;

export const StatBox = styled(motion.div)`
  font-size: 2.2rem;
  font-weight: bold;
color: ${({ theme }) => theme.palette.primary.dark};`;

export const GlowWrap = styled(motion.div)`
  border-radius: 2rem;
 background: linear-gradient(
    145deg,
    ${({ theme }) => theme.palette.primary.main}10,
    ${({ theme }) => theme.palette.primary.light}40    
  );
  padding: 2.5rem;
  backdrop-filter: blur(8px);
box-shadow: 0 10px 30px ${({ theme }) => theme.palette.primary.dark}1A;
  transition: background 0.3s ease;
`;


export const Typewriter = styled(motion.h2)`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
`;
