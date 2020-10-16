import React from "react";
import "./Filterscard.css";

const YEARS = [
  2006,
  2007,
  2008,
  2009,
  2010,
  2011,
  2012,
  2013,
  2014,
  2015,
  2016,
  2017,
  2018,
  2019,
  2020,
];

const FiltersCard = (props) => {
  return (
    <section className="filter-card">
      <div className="filter-card__subtitle-wrapper">
        <p className="filter-card__subtitle">Launch Year</p>
      </div>
      <div className="filter-card__years">
        <ul className="filter-card__year_list">
          {YEARS.map((year, index) => (
            <li key={index} className="filter-card__year">
              {year}
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-card__subtitle-wrapper">
        <p className="filter-card__subtitle">Succesful Launch</p>
      </div>
      <div className="filter-card__years">
        <ul className="filter-card__year_list">
          <li className="filter-card__year">True</li>
          <li className="filter-card__year">False</li>
        </ul>
      </div>
      <div className="filter-card__subtitle-wrapper">
        <p className="filter-card__subtitle">Successful Landing</p>
      </div>
      <div className="filter-card__years">
        <ul className="filter-card__year_list">
          <li className="filter-card__year">True</li>
          <li className="filter-card__year">False</li>
        </ul>
      </div>
    </section>
  );
};

export default FiltersCard;
