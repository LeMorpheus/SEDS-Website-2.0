import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './sponsors.module.css';
// Top of the file or above the return statement
const sponsorsData = [
  {
    image: "/sponsors/images/dsworks.svg",
    title: "DS Works",
    description: "A personal brand specializing in high-quality 3D modeling and animation services, DSWorks brings creative visions to life through precision and innovation.",
    category: "Technology Partner"
  },
  {
    image: "/sponsors/images/roboai.svg",
    title: "RoboAI",
    description: "Offering a 45+ day industrial training program, RoboAI empowers students with practical skills in robotics and artificial intelligence to future-proof their careers.",
    category: "AI and Robotics Partner"
  },
  {
    image: "/sponsors/images/kusumgar.svg",
    title: "Kusumgar",
    description: "Since 1970, Kusumgar has led the way in developing advanced technical textiles for specialized industrial and defense applications, with a strong focus on innovation and quality.",
    category: "Commercial Partner"
  },
  {
    image: "/sponsors/images/pcbway.svg",
    title: "PCBway",
    description: "A one-stop solution for PCB prototyping, manufacturing, assembly, CNC machining, 3D printing, and more — supporting rapid and reliable hardware development.",
    category: "Hardware Partner"
  },
  {
    image: "/sponsors/images/icell.svg",
    title: "I-Cell",
    description: "The Innovation Cell at BITS Pilani Hyderabad fosters a culture of creativity and entrepreneurship through hands-on projects and tech-driven initiatives..",
    category: "Innovation Partner"
  },
  {
    image: "/sponsors/images/BITS.svg",
    title: "BITS",
    description: "A premier institute of higher education and research in India, BITS Pilani Hyderabad nurtures innovation, academic excellence, and cutting-edge technical talent..",
    category: "Academic Partner"
  }
];

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
        { name : 'RoboAI', logo: '/sponsors/images/roboai.svg', category: 'Commercial Partner'},
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
    {sponsorsData.map((sponsor, index) => (
      <div key={`card-${index}`} className={styles.sponsorCardStatic}>
        <div className={styles.cardImageWrapper}>
          <Image
            src={sponsor.image}
            alt={sponsor.title}
            width={300}
            height={200}
            className={styles.cardImage}
          />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{sponsor.title}</h3>
          <p className={styles.cardDescription}>{sponsor.description}</p>
          <span className={styles.cardCategory}>{sponsor.category}</span>
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
