import React, { useMemo } from 'react';
import queryString from 'query-string';
import { HeroCards } from '../heroes/HeroCards';
import { useForm } from '../../Hooks/UseForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectores/getHeroesByName';

import './search.scss';

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchtext: q,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${searchtext}`);
  };
  const { searchtext } = formValues;

  const HeroesFilter = useMemo(() => getHeroesByName(q, [q]));
  return (
    <div className="container_search">
      <h1>Search Screen</h1>
      <hr></hr>
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr></hr>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Find your Hero"
              className="form-control"
              name="searchtext"
              autoComplete="off"
              value={searchtext}
              onChange={handleInputChange}
            ></input>
            <br></br>
            <button type="submit" className="btn btn-block btn-outline-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr></hr>
          {q === '' && <div className="alert alert-info">Search an Heroo</div>}
          {q !== '' && HeroesFilter.length === 0 && (
            <div className="alert alert-danger">There is not a Hero</div>
          )}
          {HeroesFilter.map((hero) => (
            <HeroCards key={hero.id} {...hero}></HeroCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
