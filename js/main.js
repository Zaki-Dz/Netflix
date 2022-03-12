let key = 'api_key=9d8fba2417b4ff67bf0a8b69b66249fd'
let img = 'https://image.tmdb.org/t/p/w500'
let genres = 'https://api.themoviedb.org/3/genre/movie/list?'
let movies = 'https://api.themoviedb.org/3/discover/movie?'
let list = document.querySelector('.list')

fetch(genres + key)
	.then(res => res.json())
	.then(data => {
		data.genres.map(genre => {
			fetch(movies + key + '&with_genres=' + genre.id)
				.then(res => res.json())
				.then(data => {
					list.innerHTML += `<h1>${genre.name}</h1>`
					let movies = document.createElement('div')
					movies.classList.add('movies')
					movies.innerHTML += data.results
						.map(movie => {
							return `<div class="movie">
												<img src=https://image.tmdb.org/t/p/w500${movie.backdrop_path} />
												<p>${movie.title}</p>
											</div>`
						})
						.join('')
					list.appendChild(movies)
				})
		})
	})
