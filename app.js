const express = require('express');
const path = require('path');
const checkWorkingHours = require('./middleware/checkTime');

const app = express();

// Configuration du moteur de template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware pour les heures de travail
app.use(checkWorkingHours);

// Middleware pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Accueil' });
});

app.get('/services', (req, res) => {
    res.render('services', { title: 'Nos Services' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Nous Contacter' });
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
