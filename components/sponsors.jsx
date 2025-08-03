import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './sponsors.module.css';

const Sponsors = () => {
    const [isClient, setIsClient] = useState(false);

    // All sponsor logos for the infinite carousel
    const academicPartners = [
        { name: 'BITS Pilani', logo: '/sponsors/images/BITS.png', category: 'Academic Partner' },
        { name: 'I-Cell', logo: '/sponsors/images/icell.png', category: 'Academic Partner' },
    ];

    const commercialPartners = [
        { name: 'PCBWay', logo: '/sponsors/images/pcbway.png', category: 'Commercial Partner' },
        { name: 'Kusumgar', logo: '/sponsors/images/kusumgar.png', category: 'Commercial Partner' },
        { name: 'DS Works', logo: '/sponsors/images/dsworks.png', category: 'Commercial Partner' },
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
            </div>
        </div>
    );
};

export default Sponsors;
