const express = require('express');
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const bodyParser = require('body-parser');
const app = express();
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");



const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
    V1SwaggerDocs(app, PORT);
});

// app.get('/', (req, res) => res.send('Crossfit app is online!'));






