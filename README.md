# Backend: Maths Quiz API

## Project Description
This is the backend for the Maths Quiz App, developed using Node.js and Express. The backend handles quiz data, tracks leaderboard scores, and stores session data.

## Live Demo
Visit the live website: [Maths Quiz](https://lively-sand-066de3b03.5.azurestaticapps.net)

## Features
- **API Endpoints**:
  - `GET /questions`: Fetches a set of math questions.
  - `POST /score`: Submits the user's score.
  - `GET /leaderboard`: Fetches the top scores from the leaderboard.

## Getting Started
1. **Clone the repository:**
  - `git clone https://github.com/mtk3276/maths-quiz-backend.git`
2. **Install dependencies:** 
  - In the project directory run: `npm install`
3. **Start the server**
  - In the project directory run: `npm start`
  - The app should be running on [http://localhost:5001](http://localhost:5001)

## Testing with Postman or cURL
To test the endpoints locally, you can use Postman or cURL

### GET /questions
1. **Postman**
  - Create a GET request to http://localhost:5001/api/questions
2. **cURL**
  - In your terminal run: `curl http://localhost:5001/api/questions`

### POST /score
1. **Postman**
  - Create a POST request to http://localhost:5001/api/score with a JSON body:
    ```
    {
      "username": "Bilbo",
      "score": 5
    }
    ```
2. **cURL**
  - In your terminal run: 
    `curl -X POST http://localhost:5001/api/score -H "Content-Type: application/json" -d '{"username": "exampleUser", "score": 5}'`

### GET /leaderboard
1. **Postman**
  - Create a GET request to http://localhost:5001/api/score/leaderboard
2. **cURL**
  - In your terminal run: `curl http://localhost:5001/api/score/leaderboard`


## Technologies Used
- **Node.js** - Runtime environment for server-side JavaScript
- **Express** - for building the API 
- **MongoDB and Mongoose** - for storing quiz data and user scores
- **CORS** - enable cross origin requests between frontend and backend
