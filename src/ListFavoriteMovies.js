import React, { Component } from 'react';
import FavoriteMovie from './FavoriteMovie'
class ListFavoriteMovies extends Component{
	render(){     
        return (
          <ul>{ this.props.favoriteMovies.map(item => <FavoriteMovie key={item.id} id={item.id} userName={item.userName} movieName={item.movieName}/>) }</ul>
        )      
    }
}

export default ListFavoriteMovies