import { Box, Typography } from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Block, GlowWrap, ImageContainer, SectionContainer, StatBox, TextContent } from './WhyUs.styled';
const WhyUs = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const titleControls = useAnimation();
    const isTitleInView = useInView(titleRef, { once: false, amount: 0.5 });

    const statControls = useAnimation();
    const isSectionInView = useInView(sectionRef, { once: false, amount: 0.5 });

    useEffect(() => {
        if (isTitleInView) {
            titleControls.start('visible');
        } else {
            titleControls.start('hidden'); // allow replay on re-enter
        }
    }, [isTitleInView]);

    useEffect(() => {
        if (isSectionInView) {
            statControls.start('visible');
        }
    }, [isSectionInView]);

    const blocks = [
        {
            title: 'Timeless Designs, Modern Soul',
            text: 'Each piece we create blends age-old craftsmanship with sleek contemporary allure — it’s jewelry made to last and made to turn heads.',
            image: '/img1.webp',
        },
        {
            title: 'Crafted by Masters, Just for You',
            text: 'From hand-sketching to final polish, our artisans breathe soul into every curve. Custom orders? Engravings? We do it all — exquisitely.',
            bullets: [
                '100% Handmade by Skilled Artisans',
                'Custom Orders & Engravings Available',
                'Free Shipping & Luxury Gift Packaging',
                'Easy 7-Day Returns & Exchanges',
                'Real-Time Support for Every Order',
            ],
            image: '/img2.webp',
        },
        {
            title: 'Loved, Worn, Adored Worldwide',
            text: 'With 1200+ bespoke orders and glowing feedback across continents, our pieces don’t just sit pretty — they become part of your legacy.',
            image: '/img3.png',
        },
    ];


    const stats = [
        { label: 'Client Satisfaction', value: 99, suffix: '%' },
        { label: 'Bespoke Designs', value: 1200, suffix: '+' },
        { label: 'Designers & Artisans', value: 40, suffix: '+' },
    ];


    return (
        <SectionContainer id="why-us">
            <motion.div
                ref={titleRef}
                initial="hidden"
                animate={titleControls}
                variants={{
                    hidden: { opacity: 0, x: -80 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                            type: 'spring',
                            stiffness: 60,
                            damping: 15,
                            duration: 0.8,
                        },
                    },
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        fontFamily: `'Playfair Display', serif`,
                        mb: 6,
                        textAlign: 'center',
                    }}
                >
                    Discover the Art of Adornment
                </Typography>
            </motion.div>
            {blocks.map((block, i) => {
                const isEven = i % 2 === 0;
                return (
                    <GlowWrap
                        key={i}
                        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.2 }}
                    >
                        <Block reverse={!isEven}>
                            <TextContent>
                                <Typography
                                    variant="h3"
                                    fontWeight={700}
                                    mb={2}
                                    sx={{
                                        fontFamily: `'Playfair Display', serif`,
                                        lineHeight: 1.3,
                                    }}
                                >
                                    {block.title}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    color="text.secondary"
                                    sx={{
                                        fontSize: {
                                            xs: '1rem',
                                            sm: '1.1rem',
                                            md: '1.25rem',
                                        },
                                        lineHeight: 1.8,
                                        mb: block.bullets ? 2 : 0,
                                    }}
                                >
                                    {block.text}
                                </Typography>

                                {block.bullets && (
                                    <ul style={{ paddingLeft: "1.5rem", marginTop: 0 }}>
                                        {block.bullets.map((point, idx) => (
                                            <li
                                                key={idx}
                                                style={{
                                                    fontSize: "1rem",
                                                    marginBottom: "0.5rem",
                                                    listStyle: "none",
                                                    position: "relative",
                                                    paddingLeft: "1.2rem",
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        position: "absolute",
                                                        left: 0,
                                                        top: 3,
                                                        color: '#5E1E1E',
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    ✓
                                                </span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </TextContent>

                            <ImageContainer
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                                <img
                                    src={block.image}
                                    alt={block.title}
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        borderRadius: 'inherit',
                                        display: 'block',
                                    }}
                                />
                            </ImageContainer>
                        </Block>
                    </GlowWrap>
                );
            })}
            <Box mt={6} display="flex" gap={4} justifyContent="center" flexWrap="wrap">
                {stats.map((stat, idx) => (
                    <StatBox
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={titleControls}
                        variants={{
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { delay: idx * 0.3 },
                            },
                        }}
                    >
                        {stat.value}{stat.suffix}
                        <Typography fontSize="1.2rem" color="text.secondary">
                            {stat.label}
                        </Typography>
                    </StatBox>
                ))}
            </Box>
        </SectionContainer>
    );

};

export default WhyUs;
