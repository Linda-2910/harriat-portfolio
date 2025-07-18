import { Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CollectionContainer = styled.section`
   scroll-margin-top: 8rem;
    padding: 6rem 2rem 4rem;
    background: #fff;
    position: relative;
    text-align: center;
    overflow: hidden;
    background:rgba(250, 240, 225, 0.95);

`;

export const Heading = styled(motion.h2)`
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
`;

export const Subtitle = styled(motion.p)`
    font-size: 2rem;
    color: ${({ theme }) => theme.palette.primary.dark};
    margin-bottom: 0.5rem;
`;

export const CarouselWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 500px;
    overflow: hidden;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ShimmerOverlay = styled.div`
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        120deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.4) 50%,
        rgba(255, 255, 255, 0) 100%
    );
    pointer-events: none;
    animation: shimmer 2s infinite;

    @keyframes shimmer {
        0% { left: -100%; }
        100% { left: 100%; }
    }
`;
export const ImageCard = styled(motion.div) <{ isNew?: boolean }>`
    position: relative;
    width: 100vw;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    &:hover ${ShimmerOverlay} {
        animation: shimmer 1.5s infinite;
    }

    ${({ isNew }) =>
    isNew &&
    `
        &::before {
            content: '✨ NEW';
            position: absolute;
            top: 2rem;
            left: 5rem;
            padding: 6px 14px;
            font-size: 0.75rem;
            font-weight: 700;
            color: white;
            border-radius: 6px;
            background: linear-gradient(135deg, #ff3366, #ff99cc);
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
            animation: shimmerBadge 3s infinite linear, pulseBadge 1.5s ease-in-out infinite;
        }

        @keyframes shimmerBadge {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        @keyframes pulseBadge {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
    `}
`;


export const ViewMoreBox = styled(Box)`
    display: flex;
    justify-content: center;
    margin-top: 2rem;

    button {
        font-weight: bold;
        font-size: 1rem;
        background-color: #d2a93d;
        color: #fff;
        padding: 0.8rem 2.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        transition: all 0.3s ease;

        &:hover {
            background-color: #b58f30;
        }
    }
`;

export const ArrowButton = styled(IconButton)`
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    background: white;
    border: 1px solid #ccc;
    z-index: 10;
    &:hover {
        background: #f0f0f0;
    }
`;

export const RightGemFloat = styled.img`
    position: absolute;
    top: -40px;
    right: -40px;
    width: 180px;
    opacity: 0.04;
    pointer-events: none;
    animation: float 6s ease-in-out infinite;

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(12px); }
    }
`;
