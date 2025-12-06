"use client";
import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";

import styles from "./ProductSlideshow.module.scss";

interface ProductSlideshowProps {
    productImages: string[];
    productTitle: string;
}

export const ProductSlideshow = ({
    productImages,
    productTitle,
}: ProductSlideshowProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const startX = useRef(0);
    const endX = useRef(0);

    const changeSlide = useCallback(
        (direction: 1 | -1) => {
            setActiveIndex((prevIndex) => {
                const newIndex =
                    (prevIndex + direction + productImages.length) %
                    productImages.length;
                return newIndex;
            });
        },
        [productImages.length]
    );

    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault();
        startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        endX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const swipeDistance = startX.current - endX.current;

        if (swipeDistance > 50) {
            changeSlide(1);
        } else if (swipeDistance < -50) {
            changeSlide(-1);
        }

        startX.current = 0;
        endX.current = 0;
    };

    return (
        <div
            className={styles.slideshow}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className={styles["slideshow__image-container"]}>
                <Image
                    src={productImages[activeIndex]}
                    alt={`${productTitle} image ${activeIndex + 1}`}
                    className={styles["slideshow__image"]}
                    fill
                    priority={activeIndex === 0}
                />
            </div>

            <button
                className={`${styles.slideshow__arrow} ${styles["slideshow__arrow--left"]}`}
                onClick={() => {
                    changeSlide(-1);
                }}
                aria-label="Previous slide"
            >
                &gt;
            </button>

            <button
                className={`${styles.slideshow__arrow} ${styles["slideshow__arrow--right"]}`}
                onClick={() => {
                    changeSlide(1);
                }}
                aria-label="Next slide"
            >
                &lt;
            </button>

            <div className={styles.slideshow__dots}>
                {productImages.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.slideshow__dot} ${index === activeIndex ? styles["slideshow__dot--active"] : ""}`}
                        onClick={() => {
                            setActiveIndex(index);
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
