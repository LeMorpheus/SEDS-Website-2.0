import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './SponsorsCarousel.module.css';

const SponsorsCarousel = () => {
  const [isClient, setIsClient] = useState(false);

  const academicPartners = [
    { name: 'BITS Pilani', logo: '/sponsors/images/BITS.png' },
    { name: 'I-Cell', logo: '/sponsors/images/icell.png' },
  ];

  const commercialPartners = [
    { name: 'PCBWay', logo: '/sponsors/images/pcbway.png' },
    { name: 'Kusumgar', logo: '/sponsors/images/kusumgar.png' },
    { name: 'DS Works', logo: '/sponsors/images/dsworks.png' },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Duplicate the sponsors arrays to create a seamless infinite scroll
  const duplicatedAcademic = [...academicPartners, ...academicPartners, ...academicPartners];
  const duplicatedCommercial = [...commercialPartners, ...commercialPartners, ...commercialPartners];

  if (!isClient) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className={styles.sponsorsSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Sponsors</h1>
        <div className={styles.line}></div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Academic Partners</h2>
          <div className={styles.carouselContainer}>
            <div className={styles.carousel}>
              {duplicatedAcademic.map((sponsor, index) => (
                <div key={`academic-${sponsor.name}-${index}`} className={styles.sponsorCard}>
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={styles.sponsorLogo}
                    width={180}
                    height={120}
                    style={{ objectFit: 'contain' }}
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
              {duplicatedCommercial.map((sponsor, index) => (
                <div key={`commercial-${sponsor.name}-${index}`} className={styles.sponsorCard}>
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={styles.sponsorLogo}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.line}></div>
          <h2 className={styles.sectionTitle}>Supporting the Future of Space Exploration</h2>
          <div className={styles.description}>
            <p>
              We are grateful to all our sponsors and partners who support SEDS in our mission to advance
              space exploration and education. Together, we are building the future of aerospace technology
              and inspiring the next generation of space enthusiasts.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SponsorsCarousel;