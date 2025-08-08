import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';



const data20 = [
  { name: 'Hemendra Singh Chauhan', img: 'Hemendra.png', por: 'Director of Events', url: 'https://www.linkedin.com/in/hemender12307/' },
  { name: 'Nivedan Vishwanath', img: 'Nivedan.png', por: 'Founder ', url: 'https://www.linkedin.com/in/nivedanvishwanath/' },
  { name: 'Nihar Rathi', img: 'Nihar.png', por: 'Treasurer', url: 'https://www.linkedin.com/in/niharrathi/' },
  { name: 'Rajas Raje', img: 'Rajas.png', por: 'Head of Outreach', url: 'https://www.linkedin.com/in/rajasraje/' },
  { name: 'Subhrat Praharaj ', img: 'Subhrat.jpg', por: 'Vice President', url: 'https://www.linkedin.com/in/subhrat-praharaj-485666193/' },
  { name: 'Esha Jain', img: 'Esha.png', por: 'Janus Lead', url: 'https://www.linkedin.com/in/esha-jain-705a88211/' },
];

const data21 = [
  {
    name: 'Abhijit Pranav Pamarty',
    img: 'Abhijit.png',
    por: 'Hyperion Lead',
    url: 'https://www.linkedin.com/in/abhijit-pranav-pamarty-6b2453152/'
  },
  {
    name: 'Akshat Oke',
    img: 'Akshat.jpg',
    por: 'WebDev Lead	',
    url: 'https://www.linkedin.com/in/akshat-oke-943010244/'
  },
  {
    name: 'Anant Kumar',
    img: 'Anant.png',
    por: ' Janus Lead',
    url: 'https://www.linkedin.com/in/anant-kumar-317b46217/'
  },
  {
    name: 'Antara Arvind',
    img: 'Antara.png',
    por: 'Payload Lead',
    url: 'https://www.linkedin.com/in/antara-arvind/'
  },
  {
    name: 'Anurag Ramesh',
    img: 'Anurag.png',
    por: 'Thrust Vector Contol Lead',
    url: 'https:'
  },
  {
    name: 'Aqshat Seth',
    img: 'Aqshat.png',
    por: 'President',
    url: 'https://www.linkedin.com/in/aqshat-seth/'
  },
  {
    name: 'Arunabh Singh',
    img: 'Arunabh.png',
    por: 'Head of Outreach',
    url: 'https://www.linkedin.com/in/arunabh-singh-637a931b9/'
  },
  {
    name: 'Atharva Mahajan',
    img: 'Atharva.png',
    por: 'Director of Events',
    url: 'https://www.linkedin.com/in/atharva-mahajan-bits/'
  },
  {
    name: 'Archis Sahu ',
    img: 'Archis.png',
    por: 'Rendering Team Lead',
    url: 'https://www.linkedin.com/in/archis-sahu-28a7a9212/'
  },
  {
    name: 'Devmalya Biswas',
    img: 'Devmalaya.png',
    por: 'Rocket Propulsion Lead',
    url: 'https://www.linkedin.com/in/devmalyabiswas/'
  },
  {
    name: 'Krishna Prajwal',
    img: 'Krishna.png',
    por: 'Director of Projects',
    url: 'https://www.linkedin.com/in/krishna-prajwal-s/'
  },
  {
    name: 'Shreya Muralikrishna',
    img: 'Shreya.png',
    por: 'Content & Logistics Lead',
    url: 'https://www.linkedin.com/in/shreya-muralikrishna-b60123209/'
  },
  {
    name: 'Siddhant Sarkar',
    img: 'Siddhant.png',
    por: 'Treasurer & Head of Operations',
    url: 'https://www.linkedin.com/in/siddhant-sarkar-29a75b1b9/'
  },
  {
    name: 'Vivek Das ',
    img: 'Vivek.png',
    por: 'Media & Design Lead',
    url: 'https://www.linkedin.com/in/vivek-d-46a680208/'
  },
  {
    name: 'Kalash P',
    img: 'Kalash.png',
    por: 'Artemis Lead',
    url: 'https://www.linkedin.com/in/kalash-paripurnam-96a5b21b0/'
  },
];



const data22 = [
  {
    name: "Atharva Mahajan",
    img: "Atharva.png",
    por: "President"
  },
  {
    name: "Siddhant Sarkar",
    img: "Siddhant.png",
    por: "Vice President"
  },
  {
    name: "Shreya Muralikrishna",
    img: "Shreya.png",
    por: "Head of Outreach"
  },
  {
    name: "Pavana Radhakrishnan",
    img: "Pavana.png",
    por: "Head of Operations"
  },
  {
    name: "Prakhar Bhargava",
    img: "Prakhar.png",
    por: "Treasurer"
  },
  {
    name: "Kalash P ",
    img: "Kalash.png",
    por: "Director of Projects"
  },
  {
    name: "Neel Mulay ",
    img: "Neel.png",
    por: "Artemis Lead"
  },
  {
    name: "Shashidar Kota",
    img: "Kota.png",
    por: "Artemis Deputy Lead"
  },
  {
    name: "Pratyush Gupta",
    img: "Pratyush.png",
    por: "Janus Lead"
  },
  {
    name: "Gowtham Reddy ",
    img: "Gowtham.png",
    por: "Rocket Propulsion Lead"
  },
  {
    name: "Tarun Desai",
    img: "Tarun.png",
    por: "Rocket Propulsion Deputy Lead"
  },
  {
    name: "Arya Pathak",
    img: "Arya.png",
    por: "Hyperion Lead"
  },
  {
    name: "Komal Agrawal",
    img: "Komal.png",
    por: "Hyperion Deputy Lead"
  },
  {
    name: "Shubhanga Gautam",
    img: "Shubhanga.png",
    por: "Logistics Lead"
  },
  {
    name: "Ayushi Sharma",
    img: "Ayushi.png",
    por: "Content Lead"
  },
  {
    name: "Archis Sahu ",
    img: "Archis.png",
    por: "Rendering Lead"
  },
  {
    name: "Vivek Das",
    img: "Vivek.png",
    por: "Media & Design Lead"
  },
  {
    name: "Parth Tulsyan",
    img: "Parth.png",
    por: "Thrust Vector Control Lead"
  },
];

const data25 = [
  {
    name: "Kaashvi",
    img: "Kaashvi.jpg",
    por: "President And Archangel Lead",
    url: ""
  },
  {
    name: "Aarav Harshvardhan",
    img: "default.jpg",
    por: "Vice President",
    url: ""
  },
  {
    name: "Rujuta Deshmukh",
    img: "Rujuta.jpg",
    por: "Head of Outreach And Hyperion Co-Lead",
    url: ""
  },
  {
    name: "Rishi",
    img: "default.jpg",
    por: "Director of Projects",
    url: ""
  },
  {
    name: "Aarav Dhaduk",
    img: "Aarav_D.jpg",
    por: "Treasurer",
    url: ""
  },
  {
    name: "Vaishnavi Duggaraju",
    img: "Vaishnavi.jpg",
    por: "Editorial and Design Lead",
    url: ""
  },
  {
    name: "Aviral Dwivedi",
    img: "Aviral.jpg",
    por: "Web Development Lead",
    url: ""
  },
 
  {
    name: "Kishor Kanna",
    img: "Kishor.jpg",
    por: "Publicity Lead",
    url: ""
  },
  {
    name: "Samarth Bhatia",
    img: "Samarth.jpg",
    por: "Web Development Deputy Lead",
    url: ""
  },
  {
    name: "Sham Patel",
    img: "Sham.jpg",
    por: "Janus Lead",
    url: ""
  },
  {
    name: "Sajag Narayan",
    img: "Sajag.jpg",
    por: "Hyperion Co-Lead",
    url: ""
  },
];

// CSS styles as a JavaScript object (converted from TeamPage.module.css)
const styles = {
  teamPageContainer: {
    paddingTop: '60px',
    backgroundColor: 'black',
    backgroundImage: 'url("/images/space.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    color: 'white',
    position: 'relative',
    zIndex: 0,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: -1
    }
  },
  open: {
    background: 'white',
    border: '0.4vh solid white',
    borderRadius: '50%',
    height: '2vh',
    width: '2vh'
  },
  closed: {
    backgroundColor: 'white',
    height: '1.5vh',
    marginLeft: '0.3vh',
    width: '1.5vh',
    borderRadius: '50%'
  },
  yearB: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontSize: '3vh',
    fontWeight: '700',
    marginLeft: '1.5vh',
    color: 'white'
  },
  year: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    fontSize: '2.5vh',
    fontWeight: '500',
    marginLeft: '1.5vh',
    color: '#ccc'
  },
  time: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    marginTop: '5vh'
  },
  times: {
    display: 'none' // Hidden since we're using the new icon-based selector
  },
  line: {
    display: 'none' // Hidden since we're using the new icon-based selector
  },
  right: {
    marginLeft: '15vh',
    marginRight: '15vh',
    marginTop: '80px',
    padding: '0 40px',
    width: 'calc(100% - 30vh)',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    boxSizing: 'border-box'
  },
  show: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  hide: {
    display: 'none'
  },
  none: {
    display: 'none'
  },
  dropDownTime: {
    display: 'none'
  },
  Drops: {
    height: 'auto',
    width: 'auto',
    padding: '10px',
    backgroundColor: 'rgb(0, 0, 0)',
    borderRadius: '10px',
    color: 'white',
    fontSize: '3vh'
  },
  years: {
    fontSize: '3vh',
    margin: '1.5vh',
    color: 'white'
  },
  dropYearBold: {
    color: '#ccc',
    fontSize: '3vh',
    marginBottom: '2vh'
  },
  dropYear: {
    marginBottom: '2vh',
    fontSize: '3vh',
    color: 'white'
  },
  // Card styles (converted from card.module.css)
  container: {
    height: 'auto',
    width: '100%',
    maxWidth: '290px',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    background: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(16px) saturate(180%)',
    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
    color: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    boxShadow: '0 8px 32px 0 rgba(218, 165, 32, 0.15)'
  },
 images: {
  width: '100%',
  //paddingTop: '80%', // 5:4 aspect ratio
  background: 'black',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '5px', // optional for rounded look
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
},
  img: {
    //position: 'absolute',
    //top: 0,
    //left: 0,
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
    display: 'block'
  },
  memberInfo: {
    padding: '15px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1vh',
    flex: 1,
    justifyContent: 'center'
  },
  name: {
    fontFamily: '"Kanit", sans-serif',
    fontSize: '2.5vh',
    fontWeight: '600',
    margin: 0,
    textAlign: 'center'
  },
  por: {
    fontSize: '2vh',
    color: '#ccc',
    fontWeight: '400',
    margin: 0,
    textAlign: 'center'
  },
  socialLinks: {
    marginTop: '1vh'
  },
  linkedinLink: {
    color: '#0077b5',
    fontSize: '3vh',
    transition: 'color 0.3s ease, transform 0.3s ease',
    textDecoration: 'none'
  },
  linkedinIcon: {
    width: '3vh',
    height: '3vh'
  },
  noData: {
    color: '#ccc',
    textAlign: 'center',
    fontSize: '2vh',
    margin: '2vh'
  }
};

// Mobile responsive styles
const mobileStyles = `
  @media screen and (max-width: 512px) {
    .dropDownTime {
      position: absolute;
      z-index: 2;
      top: 12vh;
      transform: translate(50%, 0);
      display: flex;
      flex-direction: row;
      justify-content: center;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      height: 10vh;
      width: auto;
    }
    
    .times {
      display: none;
    }
    
    .line {
      display: none;
    }
    
    .right {
      margin-left: 0 !important;
      margin-right: 0 !important;
      width: 100% !important;
      padding: 20px !important;
    }
    
    .container {
      width: 30vh !important;
      height: 45vh !important;
      margin: 2vh !important;
    }
    
    .name {
      font-size: 2vh;
    }
    
    .por {
      font-size: 1.6vh;
    }
  }
`;

// Custom hook for managing team data and year selection
export function useTeamData() {
  const [number, setNumber] = useState(0);
  const [year, setYear] = useState('2025-2026');
  const [drop, setDrop] = useState(false);

  // Year data mapping
  const yearData = {
    0: { data: data25, label: '2025-2026' },
    1: { data: data22, label: '2022-2023' },
    2: { data: data21, label: '2021-2022' },
    3: { data: data20, label: '2020-2021' }
  };

  const handleYearChange = (yearNumber, yearLabel) => {
    setNumber(yearNumber);
    setYear(yearLabel);
    setDrop(false);
  };

  const handleDropdownToggle = (isOpen) => {
    setDrop(isOpen);
  };

  const getCurrentYearData = () => {
    return yearData[number]?.data || [];
  };

  return {
    // State
    number,
    year,
    drop,
    yearData,
    
    // Actions
    handleYearChange,
    handleDropdownToggle,
    getCurrentYearData,
    
    // Setters (for advanced use cases)
    setNumber,
    setYear,
    setDrop
  };
}

// Team member cards component
export function TeamCards({ datas = [] }) {
  // Handle case where datas is not an array
  if (!Array.isArray(datas)) {
    console.error('TeamCards component: datas prop must be an array');
    return <div>No team data available</div>;
  }

  // Handle empty array
  if (datas.length === 0) {
    return <div style={styles.noData}>No team members to display for this year.</div>;
  }

  return (
    <>
      {datas.map((data, i) => {
        const combinedStyles = {
          ...styles.container,
          willChange: 'transform',
          perspective: '1000px'
        };
        return (
          <div 
            key={i} 
            style={combinedStyles} 
            className="team-card"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-20px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 50px rgba(218, 165, 32, 0.4), 0 0 30px rgba(255, 215, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(218, 165, 32, 0.15)';
            }}
          >
            <div style={styles.images}>
              <div style={styles.img}>
                <Image
                  src={`/assets/images/Profile_pics/${data.img}`}
                  height={233}
                  width={299}
                  alt={data.name}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent infinite loop
                    e.target.src = '/assets/images/Profile_pics/placeholder.png';
                  }}
                />
              </div>
            </div>
            <div style={styles.memberInfo}>
              <div style={styles.name}>{data.name}</div>
              <div style={styles.por}>{data.por}</div>
              {data.url && (
                <div style={styles.socialLinks}>
                  <a 
                    href={data.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={styles.linkedinLink}
                    className="linkedin-link"
                  >
                    <FontAwesomeIcon icon={faLinkedin} style={styles.linkedinIcon} />
                  </a>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

// Year selector component (timeline + mobile dropdown)
export function YearSelector({ 
  number, 
  year, 
  drop, 
  yearData, 
  onYearChange, 
  onDropdownToggle 
}) {
  return (
    <div className="year-selector">
      <div className="timeline-icon" onClick={() => onDropdownToggle(!drop)}>
        <FontAwesomeIcon icon={faClock} />
        <span className="current-year">{year}</span>
      </div>
      
      {drop && (
        <div className="year-dropdown">
          {Object.entries(yearData).map(([key, { label }]) => (
            <div
              key={key}
              className={`year-option ${number == key ? 'active' : ''}`}
              onClick={() => onYearChange(parseInt(key), label)}
            >
              {label}
            </div>
          ))}
        </div>
      )}
      <style jsx>{`
        .year-selector {
          position: fixed;
          top: 15vh;
          left: 15vh;
          z-index: 100;
        }
        
        .timeline-icon {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 1rem 1.5rem;
          border-radius: 50px;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .timeline-icon:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(218, 165, 32, 0.2);
        }
        
        .timeline-icon svg {
          width: 1.5rem;
          height: 1.5rem;
          color: #FFD700;
        }
        
        .current-year {
          color: white;
          font-size: 1.1rem;
          font-weight: 500;
        }
        
        .year-dropdown {
          position: absolute;
          top: 120%;
          left: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 0.5rem;
          min-width: 200px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          animation: fadeIn 0.2s ease;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .year-option {
          padding: 0.8rem 1.2rem;
          color: #ccc;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        
        .year-option:hover {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }
        
        .year-option.active {
          background: rgba(218, 165, 32, 0.2);
          color: #FFD700;
        }
        
        @media screen and (max-width: 1024px) {
          .year-selector {
            left: 10vh;
          }
        }

        @media screen and (max-width: 768px) {
          .year-selector {
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            top: 12vh;
            width: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .timeline-icon {
            padding: 0.5rem 0.8rem;
            font-size: 0.85rem;
            gap: 0.5rem;
          }
          
          .timeline-icon svg {
            width: 1rem;
            height: 1rem;
          }
          
          .current-year {
            font-size: 0.9rem;
          }
          
          .year-dropdown {
            width: 100%;
            min-width: unset;
            font-size: 0.85rem;
          }
          
          .year-option {
            padding: 0.5rem 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}

// Team display component
export function TeamDisplay({ number, yearData }) {
  return (
    <div style={styles.right}>
      {Object.entries(yearData).map(([key, { data }]) => (
        <div key={key} style={number == key ? styles.show : styles.hide}>
          <TeamCards datas={data} />
        </div>
      ))}
    </div>
  );
}

// Main team page component
export function TeamPage() {
  const {
    number,
    year,
    drop,
    yearData,
    handleYearChange,
    handleDropdownToggle
  } = useTeamData();

  return (
    <>
      <style jsx>{mobileStyles}</style>
      <main style={styles.teamPageContainer}>
        <div className="left">
          <div style={styles.line}></div>
          <YearSelector
            number={number}
            year={year}
            drop={drop}
            yearData={yearData}
            onYearChange={handleYearChange}
            onDropdownToggle={handleDropdownToggle}
          />
        </div>
        
        <TeamDisplay number={number} yearData={yearData} />
      </main>
      <style jsx global>{`
        .team-card {
          transform: translateZ(0);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          backface-visibility: hidden;
          position: relative;
          background: rgba(255, 255, 255, 0.03) !important;
          backdrop-filter: blur(16px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
        }
        .team-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 15px;
          padding: 2px;
          background: linear-gradient(
            315deg,
            rgba(255, 215, 0, 0.5),
            rgba(255, 255, 255, 0.1)
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }
        .team-card:hover {
          transform: translateY(-20px) scale(1.05) !important;
          box-shadow: 0 20px 50px rgba(218, 165, 32, 0.4),
                      0 0 30px rgba(255, 215, 0, 0.3) !important;
          border-color: rgba(255, 215, 0, 0.5) !important;
          z-index: 1;
        }
        .team-card:hover::before {
          background: linear-gradient(
            315deg,
            rgba(255, 215, 0, 0.8),
            rgba(255, 255, 255, 0.2)
          );
        }
        
        .linkedin-link:hover {
          color: #005582;
          transform: scale(1.2);
        }
        
        @media screen and (max-width: 512px) {
          .desktop-timeline {
            display: none !important;
          }
          
          .mobile-dropdown {
            position: absolute !important;
            z-index: 2 !important;
            top: 12vh !important;
            transform: translate(50%, 0) !important;
            display: flex !important;
            flex-direction: row !important;
            justify-content: center !important;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif !important;
            height: 10vh !important;
            width: auto !important;
          }
          
          .left div[style*="position: fixed"] {
            display: none !important;
          }
        }
        
        @media screen and (max-width: 768px) {
          .right {
            margin-top: 80px !important;
            padding: 0 10px !important;
          }
          .team-card {
            width: calc(50% - 20px) !important;
            margin: 10px !important;
            min-height: 300px !important;
          }
          .team-card .memberInfo {
            padding: 12px !important;
          }
          .team-card .name {
            font-size: 16px !important;
          }
          .team-card .por {
            font-size: 14px !important;
          }
        }
        
        @media screen and (max-width: 480px) {
          .right {
            margin-top: 70px !important;
            padding: 0 15px !important;
          }
          .team-card {
            width: 100% !important;
            max-width: 350px !important;
            margin: 10px auto !important;
            min-height: auto !important;
          }
          .year-selector {
            width: auto !important;
            max-width: 200px !important;
          }
          .timeline-icon {
            width: auto !important;
            justify-content: center !important;
            padding: 6px 12px !important;
            transform: scale(0.9) !important;
          }
          .year-dropdown {
            width: 180px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
          }
          .current-year {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </>
  );
}

// Utility function for year label formatting
export function getLabel(year) {
  return `20${year}-20${year + 1}`;
}

// Constants
export const TEAM_YEARS = {
  CURRENT: 0,
  YEAR_22_23: 1,
  YEAR_21_22: 2,
  YEAR_20_21: 3
};

// Default export is the main TeamPage component
export default TeamPage;
