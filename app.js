const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const users = require("./routes/api/users");
const connections = require("./routes/api/connections");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const image = require('./routes/api/image');




if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

app.use(passport.initialize());
require('./config/passport')(passport);

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => ("Connected to MongoDB successfully"))
.catch(err => (err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit:'4MB'}));

app.get("/", (req, res) => res.send("This is the new Linkr"));
app.use("/api/users", users);
app.use("/api/connections", connections);
app.use('/api/image', image);



const port = process.env.PORT || 5000;
app.listen(port, () => (`Server is running on port ${port}`));


//socket 
const server = require('http').createServer(app)
const io = require('socket.io')(server);

const port1 = process.env.PORT || 4001;
const chat = require('./routes/api/chat')

app.use('/api/chat', chat)

let interval;

io.on('connection', (socket) => {
    console.log('New client connected')
    if (interval){
        clearInterval(interval)
    }
    interval = setInterval(() => getApiAndEmit(socket), 1000);
    socket.on('disconnect', () => {
        console.log('Client disconnected');
        clearInterval(interval)
    });
});

const getApiAndEmit = socket => {
    const response = new Date();
    socket.emit('FromAPI', response);
};


server.listen(port1, () => console.log(`Listening on port ${port1}`));