import React from 'react';
import styles from './sponsors.module.css';

const SponsorsCarousel = () => {
    const sponsors = [
        { name: 'BITS Pilani', logo: '/sponsors/images/BITS.png' },
        { name: 'DS Works', logo: '/sponsors/images/dsworks.png' },
        { name: 'I-Cell', logo: '/sponsors/images/icell.png' },
        { name: 'Kusumgar', logo: '/sponsors/images/kusumgar.png' },
        { name: 'PCBWay', logo: '/sponsors/images/pcbway.png' },
    ];

    // Duplicate the sponsors array to create a seamless infinite scroll
    const duplicatedSponsors = [...sponsors, ...sponsors];

    return (
        <div className={styles.sponsorsSection}>
            <div className={styles.container}>
                <h1 className={styles.title}>Our Sponsors</h1>
                <div className={styles.line}></div>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Academic Partners</h2>
                    <div className={styles.carouselContainer}>
                        <div className={styles.carousel}>
                            {duplicatedSponsors.map((sponsor, index) => (
                                <div key={`${sponsor.name}-${index}`} className={styles.sponsorCard}>
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className={styles.sponsorLogo}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.line}></div>
                    <h2 className={styles.sectionTitle}>Commercial Partners</h2>
                    <div className={styles.carouselContainer}>
                        <div className={styles.carouselReverse}>
                            {duplicatedSponsors.map((sponsor, index) => (
                                <div key={`${sponsor.name}-reverse-${index}`} className={styles.sponsorCard}>
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        className={styles.sponsorLogo}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SponsorsCarousel;