import React from 'react';
import MovieList from './MovieList';
import Search from './Search';
import AddMovies from './AddMovies'
import UserMovies from '../data/UserMovies';
import watchedMovies from './watchedMovies';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies: props.movies,
      userAddedMovies: UserMovies,
      search: '',
      newMovie:'',
      movieStatus: 'Watch',
      watchedMovies: []
    }
  }
  handleSubmit(event){
    event.preventDefault();
    var searchMovie = this.state.search;
    var allMovies = this.state.movies;
    allMovies.forEach(movie => {
      let lowerCaseMovie = movie.title.toLowerCase()
      let lowerCaseSearch = searchMovie.toLowerCase()
      if(lowerCaseMovie === lowerCaseSearch){
        console.log('yay')
        this.setState({movies:[movie]})
      } 
      // else {
      //   alert('Movie not here!')
      // }
    });
    
  }
  handleSearchChange(e){
    this.setState({search: e.target.value})
  }
  
  handleAddMoviesSubmit(event){
    event.preventDefault();
    UserMovies.push({title:this.state.newMovie});
    this.setState({movies: UserMovies})
  }

  handleAddMovies(e){
    this.setState({newMovie: e.target.value})
  }

  watchedMovieAdder(movie){
    // let watchMovie = this.state.watchedMovies;
    // // console.log(watchMovie)
    // watchMovie.forEach(el=>{
    //   if(movie.title === el.title){
    //   }
    //   // console.log(el.title)
    // })
    this.state.watchedMovies.push(movie)
  }
  toggleWatchedMovie(e){
    // console.log(this.state.watchedMovies)
    this.setState({movies:this.state.watchedMovies})
  }

  toggleWatchMovie(e){
    console.log(this.state.movies)
    console.log(this.state.watchedMovies)
  }

  render() {
    return (
      <div>
        <h1>Movie List App</h1> 
          <AddMovies handleAddMoviesSubmit={this.handleAddMoviesSubmit.bind(this)} handleAddMovies={this.handleAddMovies.bind(this)} />
          <Search handleSubmit={this.handleSubmit.bind(this)} handleSearchChange={this.handleSearchChange.bind(this)}/>
        <button onClick={this.toggleWatchedMovie.bind(this)}>Watched</button>
        <button onClick={this.toggleWatchMovie.bind(this)}>To Watch</button>
          <MovieList movies={this.state.movies} watchedMovieAdder={this.watchedMovieAdder.bind(this)}/>
      </div>
    )
  }
}

export default App