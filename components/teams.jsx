import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { data25, data22, data21, data20 } from '../lib/team_data';

// CSS styles as a JavaScript object (converted from TeamPage.module.css)
const styles = {
  teamPageContainer: {
    paddingTop: '12.5vh',
    backgroundColor: 'black',
    minHeight: '100vh',
    color: 'white'
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
    position: 'fixed',
    left: '15vh',
    top: '25vh',
    zIndex: 10
  },
  line: {
    width: '0.5px',
    height: '45vh',
    background: '#fff',
    position: 'fixed',
    left: '16vh',
    top: '25vh',
    zIndex: 9
  },
  right: {
    marginLeft: '45vh',
    marginTop: '10vh',
    overflowX: 'auto',
    marginRight: '2vh'
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
    height: '55vh',
    width: '40vh',
    maxWidth: '290px',
    margin: '5vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #333',
    background: '#000',
    color: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  },
  images: {
    width: '100%',
    height: '60%',
    background: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  img: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  memberInfo: {
    padding: '1.5vh',
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
      margin-left: 4vh;
      width: 100vw;
      margin-right: 0vh;
    }
    
    .container {
      width: 30vh;
      height: 45vh;
      margin: 2vh;
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
        return (
          <div key={i} style={styles.container} className="team-card">
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
    <>
      {/* Desktop Timeline */}
      <div style={styles.times} className="desktop-timeline">
        {Object.entries(yearData).map(([key, { label }]) => (
          <div key={key} style={styles.time}>
            <div style={number == key ? styles.open : styles.closed}></div>
            <div
              style={number == key ? styles.yearB : styles.year}
              onClick={() => onYearChange(parseInt(key), label)}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
      
      {/* Mobile Dropdown */}
      <div style={styles.dropDownTime} className="mobile-dropdown">
        <div style={styles.years}>YEAR:</div>
        <div className="droppp">
          <div
            style={drop == false ? styles.Drops : styles.none}
            onClick={() => onDropdownToggle(true)}
          >
            {year}
          </div>
          <div style={drop == true ? styles.Drops : styles.none}>
            {Object.entries(yearData).map(([key, { label }]) => (
              <div
                key={key}
                style={number == key ? styles.dropYearBold : styles.dropYear}
                onClick={() => onYearChange(parseInt(key), label)}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
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
      <style jsx>{`
        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
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
          .team-card {
            width: 35vh !important;
            height: 50vh !important;
            margin: 3vh !important;
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
