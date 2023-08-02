let movies = [];
while (true) {
  let title = prompt("Enter movie title");
  let rating = prompt("Enter movie rating (imdb)");

  if (title === null || rating === null) {
    break;
  } else {
    movies.push({
      title: title,
      rating: Number(rating),
    });
  }
}

console.log("All with ratings under 7:");
for (movie of movies) {
  if (movie.rating < 7) {
    console.log(`${movie.title} (${movie.rating})`);
  }
}

console.log("All with ratings over 7:");
for (movie of movies) {
  if (movie.rating >= 7) {
    console.log(`${movie.title} (${movie.rating})`);
    break;
  }
}
