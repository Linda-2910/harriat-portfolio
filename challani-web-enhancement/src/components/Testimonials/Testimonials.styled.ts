import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import styled from "styled-components";

export const Section = styled(Box)`
  background: #f9f5f0;
  padding: 5rem 1.5rem;
  text-align: center;
  width: 100%;
`;

export const Container = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

export const Card = styled(motion(Box))`
  background: #ffffff;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  cursor: default;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    border-radius: 20px;
    background: linear-gradient(120deg, rgba(200, 160, 120, 0.3), rgba(255, 255, 255, 0.05)) border-box;
    mask: 
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 1;
  }

  &:hover::before {
    opacity: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;

export const QuoteIcon = styled(FaQuoteLeft)`
  color: #d2b48c;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Quote = styled(Typography)`
  font-style: italic;
  color: #3b2626;
  font-size: 1.1rem;
  line-height: 1.7;
  z-index: 1;
`;

export const Author = styled(Typography)`
  font-weight: 600;
  color: #6c4a4a;
  margin-top: 1.5rem;
  font-size: 0.95rem;
  z-index: 1;
`;

