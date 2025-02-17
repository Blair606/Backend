const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const swaggerSetup = require('./Swagger');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://bobby:bobby@cluster0.b7fnq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/users', userRoutes);
// Swagger setup    
swaggerSetup(app);
// api health
app.get('/',(rew,res)=>{
    res.send('api is running ')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
