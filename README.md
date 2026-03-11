# ML-TASK

## Publishing the Project to GitHub

Follow these steps to publish the project to GitHub:

1. **Initialize Git in Your Project**
   ```bash
   git init
   ```

2. **Add Your Files to Git**
   ```bash
   git add .
   ```

3. **Commit Your Changes**
   ```bash
   git commit -m "Initial commit"
   ```

4. **Add the Remote Repository**
   ```bash
   git remote add origin https://github.com/mritula2311/ML-TASK.git
   ```

5. **Push Your Code to GitHub**
   ```bash
   git branch -M main
   git push -u origin main
   ```
6. Error updates were rejected becuse the remote containing work that you do not have locally 

   ```bash
   git pull origin main --rebase
   git push
   ```


## Description
This project is a Node.js server built with Express.js. It provides various endpoints to interact with a dataset of movies. The server fetches data from an external API and exposes endpoints for querying and analyzing the dataset.

## Features
- Fetches movie data from an external API.
- Provides endpoints to:
  - Retrieve the entire dataset.
  - Get a list of all movies.
  - Search movies by genre.
  - Count the total number of movies.
  - Retrieve unique genres.
  - Get movies with multiple genres.
  - Get genre statistics.
  - Find the first movie of each genre.
  - Identify the most popular genre.
  - Count movies by a specific genre.
  - Retrieve a movie by its ID.

## Endpoints
### Base URL
`http://localhost:<PORT>`

### 1. `/`
- **Method**: GET
- **Description**: Returns the entire dataset.

### 2. `/movies`
- **Method**: GET
- **Description**: Returns the total number of movies and the list of movies.

### 3. `/movies/search?genre=VALUE`
- **Method**: GET
- **Description**: Searches for movies by genre.

### 4. `/movies/count`
- **Method**: GET
- **Description**: Returns the total number of movies.

### 5. `/movies/genre`
- **Method**: GET
- **Description**: Returns a list of unique genres.

### 6. `/movies/multi-genre`
- **Method**: GET
- **Description**: Returns movies that belong to multiple genres.

### 7. `/movies/genre/count`
- **Method**: GET
- **Description**: Returns the count of movies for each genre.

### 8. `/movies/genre/first`
- **Method**: GET
- **Description**: Returns the first movie of each genre.

### 9. `/movies/genre/popular`
- **Method**: GET
- **Description**: Returns the most popular genre and its count.

### 10. `/movies/genre/:genre/count`
- **Method**: GET
- **Description**: Returns the count of movies for a specific genre.

### 11. `/movies/:id`
- **Method**: GET
- **Description**: Retrieves a movie by its ID.

## Environment Variables
The following environment variables are required:
- `PORT`: The port on which the server will run.
- `UID`: The user ID for authentication with the external API.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mritula2311/ML-TASK.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ML-TASK
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and add the required environment variables.

## Usage
1. Start the server:
   ```bash
   npm start
   ```
2. Access the endpoints using a tool like Postman or a web browser.

## Dependencies
- `express`
- `dotenv`
- `axios`

## License
This project is licensed under the MIT License.