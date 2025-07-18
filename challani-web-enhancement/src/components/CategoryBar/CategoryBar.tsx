// CategoryExplorer.tsx

import { Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CategoryItem, CategoryRow, CollectionItem, HoverMenu, Wrapper } from "./CategoryBar.styled";

// Sample category data
const categories = [
    {
        name: "Earrings",
        collections: [
            "Timeless Studs",
            "Traditional Jhumkas",
            "Elegant Hoops",
            "Statement Danglers",
        ],
    },
    {
        name: "Rings",
        collections: [
            "Solitaire Classics",
            "Bold Cocktail Rings",
            "Stackable Styles",
            "Eternal Bands",
        ],
    },
    {
        name: "Necklaces & Haarams",
        collections: [
            "Choker Elegance",
            "Layered Haarams",
            "Locket Charms",
            "Beaded Grace",
        ],
    },
    {
        name: "Bracelets & Bangles",
        collections: [
            "Minimal Bangles",
            "Charm Bracelets",
            "Textured Cuffs",
            "Classic Chains",
        ],
    },
    {
        name: "Antique Collections",
        collections: [
            "Temple Designs",
            "Heritage Sets",
            "Oxidized Silvers",
            "Vintage Golds",
        ],
    },
];
const CategoryExplorer = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <Wrapper>
            <CategoryRow>
                <CategoryItem
                    onMouseEnter={() => setHoveredIndex(null)} // prevent menu popups
                    sx={{ marginRight: "1.5rem" }}
                >
                    <Typography
                        sx={(theme) => ({
                            fontWeight: "bold",
                            fontFamily: "'Playfair Display', serif",
                            color: theme.palette.primary.main,
                            position: "relative",
                            "&::after": {
                                content: '"NEW"',
                                position: "absolute",
                                top: -10,
                                right: -28,
                                background: "#f6e3c5",
                                color: "#4e0000",
                                fontSize: "0.6rem",
                                fontWeight: "bold",
                                padding: "2px 6px",
                                borderRadius: "10px",
                                letterSpacing: "0.5px",
                                animation: "bounce 1.5s infinite",
                            },
                        })}
                    >
                        Now Trending
                    </Typography>

                </CategoryItem>
                {categories.map((cat, index) => (
                    <CategoryItem
                        key={cat.name}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <Typography
                            sx={{
                                fontWeight: hoveredIndex === index ? "bold" : "normal",
                                borderBottom: hoveredIndex === index ? "2px solid #b80000" : "none",
                                pb: 0.5,
                                fontFamily: "'Libre Baskerville', serif",
                            }}
                        >
                            {cat.name}
                        </Typography>

                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <HoverMenu
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {cat.collections.map((item) => (
                                        <CollectionItem key={item}>
                                            {item}
                                        </CollectionItem>
                                    ))}
                                </HoverMenu>
                            )}
                        </AnimatePresence>
                    </CategoryItem>
                ))}
            </CategoryRow>
        </Wrapper>
    );
};

export default CategoryExplorer;
