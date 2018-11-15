import React, { Component } from 'react';
/* Componente que mostrar o filme favorito */
class FavoriteMovie extends Component{
	render(){     
        return <li key={this.props.id}>{this.props.userName}'s favorite movie is {this.props.movieName}</li>
    }
}

export default FavoriteMovie