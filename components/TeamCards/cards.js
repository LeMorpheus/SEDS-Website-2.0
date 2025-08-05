import React from 'react'
import styles from '../../styles/teams/card.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Cards({ datas = [] }) {
  // Handle case where datas is not an array
  if (!Array.isArray(datas)) {
    console.error('Cards component: datas prop must be an array');
    return <div>No team data available</div>;
  }

  // Handle empty array
  if (datas.length === 0) {
    return <div className={styles.noData}>No team members to display for this year.</div>;
  }

  return (
    <>
      {datas.map((data, i) => {
        return (
          <div key={i} className={styles.container}>
            <div className={styles.images}>
              <div className={styles.img}>
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
            <div className={styles.memberInfo}>
              <div className={styles.name}>{data.name}</div>
              <div className={styles.por}>{data.por}</div>
              {data.url && (
                <div className={styles.socialLinks}>
                  <a href={data.url} target="_blank" rel="noreferrer" className={styles.linkedinLink}>
                    <FontAwesomeIcon icon={faLinkedin} className={styles.linkedinIcon} />
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

export default Cards