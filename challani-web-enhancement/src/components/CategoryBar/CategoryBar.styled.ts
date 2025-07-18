// CategoryStyles.ts
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export const Wrapper = styled(Box)`
  background-color:${({ theme }) => theme.palette.divider};
padding: 0.5rem 1rem 1rem;
  text-align: center;
  position: fixed;
  top: 4rem; 
  width: 100%;
  z-index: 1001;
  border-bottom: 1px solid #f1eaea;
  @keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}
`;

export const CategoryRow = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const CategoryItem = styled(Box)`
  position: relative;
  cursor: pointer;
`;

export const HoverMenu = styled(motion(Box))`
  position: absolute;
  top: 2.5rem;
  left: 0;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  z-index: 10;
  min-width: 160px;
`;

export const CollectionItem = styled(Typography)`
  padding: 0.3rem 0;
  font-size: 0.9rem;
  color: #333;
  transition: all 0.2s ease;
  &:hover {
  color:${({ theme }) => theme.palette.secondary.main};
  }
`;
