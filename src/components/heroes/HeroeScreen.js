import React from 'react';
import getHeroesById from '../../selectores/getHeroesById';
import { useParams, Redirect } from 'react-router-dom';

import './HeroScreen.scss';

const HeroeScreen = ({ history }) => {
  const { heroeId } = useParams();

  const hero = getHeroesById(heroeId);

  console.log(hero);

  if (!hero) {
    return <Redirect to="/"></Redirect>;
  }

  const handleClick = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div className="container">
      <div
        className="row"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="card mb-3 shadow p-3 mb-5 mt-5 bg-white rounded">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={`../assets/heroes/${heroeId}.jpg`}
                className="card-img animate__animated animate__fadeIn"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body  animate__animated animate__fadeIn">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroeScreen;
