const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const RSVP = require('./models/RSVP');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Routes
app.post('/api/rsvp/no', async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });

    try {
        const rsvp = new RSVP({ response: 'no', name });
        await rsvp.save();
        res.status(201).json({ message: 'RSVP received' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/api/rsvp/yes', async (req, res) => {
    const { name, starter, main, dessert, song } = req.body;
    if (!name || !starter || !main || !dessert || !song) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const rsvp = new RSVP({ response: 'yes', name, starter, main, dessert, song });
        await rsvp.save();
        res.status(201).json({ message: 'RSVP received' });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/', (req, res) => {
    res.send('Wedding Backend is running');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
