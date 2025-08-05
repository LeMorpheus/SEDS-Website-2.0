import React from 'react'
import { useState } from 'react'
import Cards from '../components/TeamCards/cards';
import styles from '../styles/teams/teams.module.css'
import { data25, data22, data21, data20 } from "../lib/team_data";

function getLabel(year) {
  return `20${year}-20${year + 1}`;
}

function Teams() {
  const [number, setNumber] = useState(0);
  const data22test = [
    {
      img: "",
      name: 'Akshat Oke',
      por: "seggs god",
      hrefL: "abc.com",
      hrefF: "hub.com"
    },
    {
      img: "",
      name: 'Paritosh Kadam',
      por: "seggs god",
      hrefL: "abc.com",
      hrefF: "hub.com"
    },
    {
      img: "",
      name: 'Siddhant Sarkar',
      por: "seggs god",
      hrefL: "abc.com",
      hrefF: "hub.com"
    },
    {
      img: "",
      name: 'christopher nolan',
      por: "seggs god",
      hrefL: "abc.com",
      hrefF: "hub.com"
    },
    {
      img: "",
      name: 'hero Alom',
      por: "seggs god",
      hrefL: "abc.com",
      hrefF: "hub.com"
    },
    {
      img: "",
      name: 'hero Alom',
      por: "seggs god",
      hrefL: "abc.com",
      hrefF: "hub.com"
    },
  ]
  const data21test = [{
    img: "",
    name: 'hero Alom',
    por: "seggs god",
    hrefL: "abc.com",
    hrefF: "hub.com"
  }]
  const data20test = [{
    img: "",
    name: 'hero Alom',
    por: "seggs god",
    hrefL: "abc.com",
    hrefF: "hub.com"
  }]

  const [year, setyear] = useState('2025-2026');
  const [drop, setDrop] = useState(false);

  return (
    <main style={{ paddingTop: "12.5vh", backgroundColor: "black", minHeight: "100vh", color: "white" }}>
      <div className={styles.left}>
        <div className={styles.line}></div>
        <div className={styles.times}>
          <div className={styles.time}>
            <div className={number == 0 ? styles.open : styles.closed}></div>
            <div
              className={number == 0 ? styles.yearB : styles.year}
              onClick={() => {
                setNumber(0);
              }}
            >
              2025-2026
            </div>
          </div>
          <div className={styles.time}>
            <div className={number == 1 ? styles.open : styles.closed}></div>
            <div
              className={number == 1 ? styles.yearB : styles.year}
              onClick={() => {
                setNumber(1);
              }}
            >
              2022-2023
            </div>
          </div>
          <div className={styles.time}>
            <div className={number == 2 ? styles.open : styles.closed}></div>
            <div
              className={number == 2 ? styles.yearB : styles.year}
              onClick={() => {
                setNumber(2);
              }}
            >
              2021-2022
            </div>
          </div>
          <div className={styles.time}>
            <div className={number == 3 ? styles.open : styles.closed}></div>
            <div
              className={number == 3 ? styles.yearB : styles.year}
              onClick={() => {
                setNumber(3);
              }}
            >
              2020-2021
            </div>
          </div>
        </div>
        <div className={styles.dropDownTime}>
          <div className={styles.years}>YEAR:</div>
          <div className={styles.droppp}>
            <div
              className={drop == false ? styles.Drops : styles.none}
              onClick={() => {
                setDrop(true);
              }}
            >
              {year}
            </div>
            <div className={drop == true ? styles.Drops : styles.none}>
              <div
                className={number == 0 ? styles.dropYearBold : styles.dropYear}
                onClick={() => {
                  setyear("2025-2026");
                  setNumber(0);
                  setDrop(false);
                }}
              >
                2025-2026
              </div>
              <div
                className={number == 1 ? styles.dropYearBold : styles.dropYear}
                onClick={() => {
                  setyear("2022-2023");
                  setNumber(1);
                  setDrop(false);
                }}
              >
                2022-2023
              </div>
              <div
                className={number == 2 ? styles.dropYearBold : styles.dropYear}
                onClick={() => {
                  setyear("2021-2022");
                  setNumber(2);
                  setDrop(false);
                }}
              >
                2021-2022
              </div>
              <div
                className={number == 3 ? styles.dropYearBold : styles.dropYear}
                onClick={() => {
                  setyear("2020-2021");
                  setNumber(3);
                  setDrop(false);
                }}
              >
                2020-2021
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={number == 0 ? styles.show : styles.hide}>
          <Cards datas={data25} />
        </div>
        <div className={number == 1 ? styles.show : styles.hide}>
          <Cards datas={data22} />
        </div>
        <div className={number == 2 ? styles.show : styles.hide}>
          <Cards datas={data21} />
        </div>
        <div className={number == 3 ? styles.show : styles.hide}>
          <Cards datas={data20} />
        </div>
      </div>
    </main>
  );
}

export default Teams