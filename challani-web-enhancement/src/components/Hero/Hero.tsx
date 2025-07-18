import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FullScreenSection, TextBlock } from './Hero.styled';
import { useRef } from 'react';
import { scrollToSection } from '../../utils/scrollToSection';

const Hero = () => {
    return (
        <FullScreenSection id='hero'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <TextBlock>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '1.5rem', md: '3rem' },
                            lineHeight: { xs: '2rem', md: '4rem' },
                            letterSpacing: '-1.5px',
                            fontWeight: 700,
                            color: '#fff',
                            mb: 2,
                            textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
                        }}
                    >
                        Discover The <br />
                        <Box
                            component="span"
                            sx={{
                                color: '#f4c430',
                                fontStyle: 'italic',
                                fontWeight: 600,
                            }}
                        >
                            Beauty
                        </Box>{' '}
                        of Fine Jewelry
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            color: '#eee',
                            mb: 5,
                            maxWidth: '90%',
                        }}
                    >
                        Explore our collection of exquisite pieces and find your perfect match.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: 9999,
                            px: 5,
                            py: 1.8,
                            fontWeight: 600,
                            fontSize: '1.5rem',
                            backdropFilter: 'blur(6px)',
                            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
                        }}
                        onClick={() => scrollToSection('collection', 50)}
                    >
                        Explore Collections
                    </Button>

                </TextBlock>
            </motion.div>

        </FullScreenSection>
    );
};

export default Hero;
