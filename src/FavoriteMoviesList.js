import React, { Component } from 'react';
import FavoriteMovie from './FavoriteMovie'
class FavoriteMoviesList extends Component{
	render(){    
        const {profiles, movies, users} = this.props;

        const getFavoriteMovies = () => profiles.map(profile => ({
          id: profile.id,
          userName : users[parseInt(profile.userID, 10)].name,
          movieName: movies[parseInt(profile.favoriteMovieID, 10)].name
        }));

        return (
          <ul>{ getFavoriteMovies().map(item => <FavoriteMovie key={item.id} id={item.id} userName={item.userName} movieName={item.movieName}/>) }</ul>
        )      
    }
}

export default FavoriteMoviesList