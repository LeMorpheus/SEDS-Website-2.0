import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './sponsors.module.css';

const Sponsors = () => {
    const [isClient, setIsClient] = useState(false);

    // All sponsor logos for the infinite carousel
    const academicPartners = [
        { name: 'BITS Pilani', logo: '/sponsors/images/BITS.svg', category: 'Academic Partner' },
        { name: 'I-Cell', logo: '/sponsors/images/icell.svg', category: 'Academic Partner' },
    ];

    const commercialPartners = [
        { name: 'PCBWay', logo: '/sponsors/images/pcbway.svg', category: 'Commercial Partner' },
        { name: 'Kusumgar', logo: '/sponsors/images/kusumgar.svg', category: 'Commercial Partner' },
        { name: 'DS Works', logo: '/sponsors/images/dsworks.svg', category: 'Commercial Partner' },
    ];

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Create multiple copies for infinite scroll effect (only commercial partners)
    const infiniteCommercialSponsors = [
        ...commercialPartners,
        ...commercialPartners,
        ...commercialPartners,
        ...commercialPartners,
        ...commercialPartners,
        ...commercialPartners
    ];

    if (!isClient) {
        return null; // Prevent hydration mismatch
    }

    return (
        <div className={styles.sponsorsSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>Our Sponsors & Partners</h1>
                <div className={styles.subtitle}>
                    Supporting the Future of Space Exploration
                </div>
                <div className={styles.line}></div>

                {/* Academic Partners - Static Section */}
                <section className={styles.academicSection}>
                    <h2 className={styles.sectionTitle}>Academic Partners</h2>
                    <div className={styles.academicGrid}>
                        {academicPartners.map((sponsor, index) => (
                            <div key={`academic-${sponsor.name}-${index}`} className={styles.academicCard}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        width={400}
                                        height={240}
                                        className={styles.sponsorLogo}
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Commercial Partners Section Title */}
                <section className={styles.commercialSection}>
                    <h2 className={styles.sectionTitle}>Commercial Partners</h2>
                </section>

                {/* Single Infinite Carousel - Commercial Partners Only */}
                <div className={styles.carouselWrapper}>
                    <div className={styles.carouselContainer}>
                        <div className={styles.carousel}>
                            {infiniteCommercialSponsors.map((sponsor, index) => (
                                <div key={`sponsor-${sponsor.name}-${index}`} className={styles.sponsorCard}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={sponsor.logo}
                                            alt={sponsor.name}
                                            width={400}
                                            height={240}
                                            className={styles.sponsorLogo}
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Sponsors Cards Grid */}
                <section className={styles.cardsSection}>

                    <div className={styles.cardsGrid}>
                        {[1, 2, 3, 4].map((index) => (
                            <div key={`card-${index}`} className={styles.sponsorCardStatic}>
                                <div className={styles.cardImageWrapper}>
                                    <Image
                                        src="/sponsors/images/Google_Favicon_2025.svg.svg"
                                        alt={`Sponsor ${index}`}
                                        width={300}
                                        height={200}
                                        className={styles.cardImage}
                                    />
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>Sponsor Company {index}</h3>
                                    <p className={styles.cardDescription}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    </p>
                                    <span className={styles.cardCategory}>Technology Partner</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Sponsors;
