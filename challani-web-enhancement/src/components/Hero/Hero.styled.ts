import { Box } from '@mui/material';
import { styled } from 'styled-components';
export const FullScreenSection = styled(Box)`
scroll-margin-top: 8rem;
  width: 100vw;
  scroll-snap-align: start;
  background: url('/Hero.png') center center / cover no-repeat;
  position: relative;
  color: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;
export const TextBlock = styled(Box)`
  z-index: 2;
  max-width: 800px;
  padding-left: 100px;
  padding-right: 32px;
  padding-top: 100px;
  padding-bottom: 80px;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: 48px 24px;
    max-width: 100%;
    text-align: center;
  }
`;
export const HeroImage = styled(Box)`
  position: absolute;
  right: 5%;
  bottom: 0;
  width: 35%;
  max-height: 90vh;
  img {
    width: 100%;
    object-fit: contain;
filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.6)) 
        drop-shadow(0 0 30px rgba(255, 215, 0, 0.2));
  }
  @media (max-width: 768px) {
    display: none;
  }
`;