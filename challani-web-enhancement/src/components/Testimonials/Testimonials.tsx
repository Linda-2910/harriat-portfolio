import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Heading } from "../Collections/Collections.styled";
import { Author, Card, Container, Quote, QuoteIcon, Section } from "./Testimonials.styled";

const testimonials = [
    {
        quote: "These pieces feel handcrafted for me — elegance in every detail.",
        author: "— Aditi, Mumbai",
    },
    {
        quote: "I wore the Poulomi Earrings at my function! My family made the purchase, but I fell in love with the earrings! 💙",
        author: "— Priya, Delhi",
    },
    {
        quote: "Aurus redefines jewelry — it's not just an accessory, it's a statement of art and heritage.",
        author: "— Kavya, Chennai",
    },
];

export default function Testimonials() {
    const titleControls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        if (isInView) {
            titleControls.start("visible");
        }
    }, [isInView]);
    return (
        <Section id="testimonials">
            <Heading
                ref={ref}
                as={motion.h2}
                initial="hidden"
                animate={titleControls}
                variants={{
                    hidden: { width: 0 },
                    visible: { width: '100%' },
                }}
                transition={{ duration: 3 }}
            >
                What Our Clients Say
            </Heading>
            <Container>
                {testimonials.map((t, i) => (
                    <Card
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                    >
                        <QuoteIcon />
                        <Quote>"{t.quote}"</Quote>
                        <Author>{t.author}</Author>
                    </Card>
                ))}
            </Container>
        </Section>
    );
}
