import React from 'react';
import { Link } from 'react-router-dom';

import './heroCard.scss';

export const HeroCards = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card ms-3 animate__animated animate__fadeIn">
      <div className="row">
        <div className="col-md-4 herophoto">
          <img
            src={`./assets/heroes/${id}.jpg`}
            className="img-fluid img-thumbnail imgen"
            alt="..."
          />
        </div>
        <div className="col-12 col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>

            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>

            <Link to={`./hero/${id}`}>More..</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
