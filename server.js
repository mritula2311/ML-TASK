import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import { moviesList } from "./config/db.js";


dotenv.config();
const app = express();
const port = process.env.PORT;
const baseurl = "https://t4e-demotestserver.onrender.com/api";

let dataset = [];

const dataloader = async () => {
    try {
        const response = await axios.post(`${baseurl}/public/token`, {
            "studentId": process.env.UID,
            "set": "setA"
        });

        const token = response.data.token;
        const dataurl = response.data.dataUrl;

        const response2 = await axios.get(`${baseurl}${dataurl}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        dataset = response2.data;
        console.log("Live data fetched successfully.");
    } catch (error) {
        console.error("Error fetching live data. Falling back to local database.");
        dataset = { data: { movies: moviesList } }; // Fallback to local database
    }

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

dataloader();

// "/" endpoint to return the entire dataset
app.get('/', (req,res)=>{
    res.json(dataset);
} );
console.log(dataset);

app.get('/movies', (req, res) => {
    res.json({
        totalMovies: dataset.data.movies.length,
        movies: dataset.data.movies
    });
});

//Q3. Search Query Endpoint (/movies/search?genre=VALUE)
app.get("/movies/search", async (req, res) => {
    try {
        const { genre } = req.query;
        const filtered = dataset.data.movies.filter((m) => m.genre.find((g) => g.toLowerCase() === genre.toLowerCase()));
        res.json({ filtered });
    }
    catch (err) {
        res.status(404).json({ message: "Movie not found" });
    }
});

// Q4. Movies Count (/movies/count)
app.get("/movies/count", async (req, res) => {
    try {
        const totalMovies = dataset.data.movies.length;
        res.json({ totalMovies });
    }
    catch (err) {
        res.status(500).json({ message: "Era retrieving" });
    }
});

//Q5. (/movies/genre)
app.get("/movies/genre", async (req, res) => {
    try {
        const allGenres = dataset.data.movies.flatMap(movie => movie.genre);
        const uniqueGenres = [...new Set(allGenres)];
        res.json({
            genres: uniqueGenres
        });
    }
    catch (err) {
        res.status(500).json({ message: "Error retrieving genres" });
    }
});

//Q6. Multiple genres (/movies/multi-genre)
app.get("/movies/multi-genre", async (req, res) => {
    try {
        const filtered_multi = dataset.data.movies.filter((m) => m.genre.length > 1);
        res.json(filtered_multi);
    }
    catch (err) {
        res.status(404).json({ message: "Movie not found" });
    }
});

//Q7. Genre Statistics(/movies/genre/count)
app.get("/movies/genre/count", async (req, res) => {
    try {
        const genreCount = {};
        dataset.data.movies.forEach((m) => {
            m.genre.forEach((g) => {
                genreCount[g] = (genreCount[g] || 0) + 1;
            });
        });
        res.json(genreCount)
    }
    catch (err) {
        res.status(500).json({ message: "Genre Count not found" });
    }
});

//Q8. First Movie of each genre(/movies/genre/first)
app.get("/movies/genre/first", async (req, res) => {
    try {
        const First = {};
        dataset.data.movies.forEach((m) => {
            m.genre.forEach((g) => {
                if (!First[g]) {
                    First[g] = m.name;
                }
            });
        });
        res.json(First)
    }
    catch (err) {
        res.status(500).json({ message: "Genre First not found" });
    }
});

//Q9. Most Frequent Genre (/movies/genre/popular)
app.get("/movies/genre/popular", async (req, res) => {
    try {
        const genreCount = {};

        dataset.data.movies.forEach((movie) => {
            movie.genre.forEach((g) => {
                genreCount[g] = (genreCount[g] || 0) + 1;
            });
        });

        let maxGenre = null;
        let maxCount = 0;

        for (let genre in genreCount) {
            if (genreCount[genre] > maxCount) {
                maxCount = genreCount[genre];
                maxGenre = genre;
            }
        }

        res.json({
            genre: maxGenre,
            count: maxCount
        });

    } catch (err) {
        res.status(500).json({ error: "Something went wrong" });
    }
});

//Q10. Movies by genre Count(/movies/genre/:genre/count)
app.get("/movies/genre/:genre/count", async (req, res) => {
    try {
        const { genre } = req.params;
        const matched = dataset.data.movies.filter((m) => m.genre.find((g) => g.toLowerCase() === genre.toLowerCase()));

        const matchedgenre = matched[0].genre.find((g) => g.toLowerCase() === genre.toLowerCase());
        res.json({
            genre: matchedgenre,
            count: matched.length
        });

    }
    catch (err) {
        res.status(500).json({ message: "No movies found for this genre" });
    }
});


app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    const movie = dataset.data.movies.find((movie) => movie.id === id);
    if (!movie) {
        res.status(404).json({ message: "movie not found" }); 
    } else {
        res.json(movie);
    }
});