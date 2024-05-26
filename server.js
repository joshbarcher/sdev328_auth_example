import express from 'express';

const app = express();

//default middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'pug');

//start the server
const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log(`Server started on ${port}`);
});