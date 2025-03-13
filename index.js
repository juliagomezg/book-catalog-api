require('dotenv').config(); // 👈 ¡Debe estar al inicio!

const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// ⚙️ Revisa que lea la URL
console.log('👉 URL que va a usar Mongo:', process.env.MONGODB_URI);

connectDB();

app.use(express.json());
app.use('/api', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
