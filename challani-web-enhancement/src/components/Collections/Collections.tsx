import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';
import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
    ArrowButton,
    CarouselWrapper,
    CollectionContainer,
    Heading,
    ImageCard,
    RightGemFloat,
    ShimmerOverlay,
    Subtitle,
    ViewMoreBox
} from './Collections.styled';

import earrings from '../../assets/collections/earings.jpg';
import necklace from '../../assets/collections/necklace.jpg';
import bracelets from '../../assets/collections/rings.jpg';

const images = [
    { src: necklace, name: 'Necklaces' },
    { src: earrings, name: 'Earrings' },
    { src: bracelets, name: 'Bracelets' },
];

const CollectionSection = () => {
    const [index, setIndex] = useState(0);

    const titleRef = useRef(null);
    const sectionRef = useRef(null);

    const titleControls = useAnimation();
    const statControls = useAnimation();

    const isTitleInView = useInView(titleRef, { amount: 0.5, once: false });
    const isSectionInView = useInView(sectionRef, { amount: 0.5, once: false });

    useEffect(() => {
        if (isTitleInView) titleControls.start('visible');
    }, [isTitleInView, titleControls]);

    useEffect(() => {
        if (isSectionInView) statControls.start('visible');
    }, [isSectionInView, statControls]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <CollectionContainer ref={sectionRef} id="collection">
            <RightGemFloat src="/assets/decor/gemstone.svg" alt="Floating Gem" />

            <Subtitle
                ref={titleRef}
                as={motion.p}
                initial="hidden"
                animate={titleControls}
                variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 1 }}
            >
                Handpicked pieces that whisper elegance.
            </Subtitle>

            <Heading
                as={motion.h2}
                initial="hidden"
                animate={titleControls}
                variants={{
                    hidden: { width: 0 },
                    visible: { width: '100%' },
                }}
                transition={{ duration: 3 }}
            >
                Our Featured Collection
            </Heading>

            <CarouselWrapper>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ImageCard isNew={true}>
                            <motion.img
                                src={images[index].src}
                                alt={images[index].name}
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.4 }}
                            />
                            <ShimmerOverlay />
                        </ImageCard>
                    </motion.div>
                </AnimatePresence>

                <ArrowButton onClick={handleNext}>
                    <ArrowForwardIosIcon />
                </ArrowButton>
            </CarouselWrapper>

            <ViewMoreBox>
                <Button variant="contained" size="large" color="secondary">
                    View Full Collection
                </Button>
            </ViewMoreBox>
        </CollectionContainer>
    );
};

export default CollectionSection;
