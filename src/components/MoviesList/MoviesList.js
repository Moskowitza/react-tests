/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from '../Movie/Movie';
import {apiKey} from '../../keys/apiKeys'
class MoviesList extends PureComponent {
  state = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=f3f97bfca4a38439e989f88533d44101&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
      );
      console.log(res.body)
      const movies = await res.json();
      if(res.ok){
        this.setState({
          movies: movies.results,
        });
      }
      console.log(movies)
    } catch (e) {
      console.log(e);
    }
  }

  render() {
      const {movies}=this.state
      if(movies.length < 1) return <h1 data-testid="loading">Loading</h1>
    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
