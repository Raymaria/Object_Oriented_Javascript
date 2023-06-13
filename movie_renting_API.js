class Movie {
    constructor(title, genre, releaseYear) {
      this.title = title;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.isRented = false;
    }
  }
  
  class MovieStore {
    constructor() {
      this.movies = [];
    }
  
    addMovie(title, genre, releaseYear) {
      const movie = new Movie(title, genre, releaseYear);
      this.movies.push(movie);
    }
  
    rentMovie(title) {
      const movie = this.movies.find((movie) => movie.title === title);
  
      if (movie) {
        if (movie.isRented) {
          console.log(`Sorry, ${movie.title} is already rented.`);
        } else {
          movie.isRented = true;
          console.log(`You have rented ${movie.title}. Enjoy!`);
        }
      } else {
        console.log(`Sorry, we don't have ${title} in our movie store.`);
      }
    }
  
    returnMovie(title) {
      const movie = this.movies.find((movie) => movie.title === title);
  
      if (movie) {
        if (movie.isRented) {
          movie.isRented = false;
          console.log(`You have returned ${movie.title}. Thank you!`);
        } else {
          console.log(`You haven't rented ${movie.title}.`);
        }
      } else {
        console.log(`Sorry, we don't have ${title} in our movie store.`);
      }
    }
  
    listMovies() {
      console.log("Movie Store Inventory:");
      this.movies.forEach((movie) => {
        const status = movie.isRented ? "Rented" : "Available";
        console.log(`${movie.title} (${movie.genre}) - ${status}`);
      });
    }
  }
  
  // Usage Example
  const movieStore = new MovieStore();
  
  movieStore.addMovie("The Shawshank Redemption", "Drama", 1994);
  movieStore.addMovie("Pulp Fiction", "Crime", 1994);
  movieStore.addMovie("The Dark Knight", "Action", 2008);
  
  movieStore.listMovies();
  // Output:
  // Movie Store Inventory:
  // The Shawshank Redemption (Drama) - Available
  // Pulp Fiction (Crime) - Available
  // The Dark Knight (Action) - Available
  
  movieStore.rentMovie("Pulp Fiction");
  // Output: You have rented Pulp Fiction. Enjoy!
  
  movieStore.rentMovie("Pulp Fiction");
  // Output: Sorry, Pulp Fiction is already rented.
  
  movieStore.listMovies();
  // Output:
  // Movie Store Inventory:
  // The Shawshank Redemption (Drama) - Available
  // Pulp Fiction (Crime) - Rented
  // The Dark Knight (Action) - Available
  
  movieStore.returnMovie("The Dark Knight");
  // Output: You haven't rented The Dark Knight.
  
  movieStore.returnMovie("Pulp Fiction");
  // Output: You have returned Pulp Fiction. Thank you!
  
  movieStore.listMovies();
  // Output:
  // Movie Store Inventory:
  // The Shawshank Redemption (Drama) - Available
  // Pulp Fiction (Crime) - Available
  // The Dark Knight (Action) - Available
  