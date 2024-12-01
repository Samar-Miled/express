
const checkWorkingHours = (req, res, next) => {
    const now = new Date();
    const day = now.getDay(); 
    const hour = now.getHours(); 

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next(); 
    } else {
        res.send("<h1>Site indisponible en dehors des heures de travail (Lundi - Vendredi, 9h - 17h).</h1>");
    }
};

module.exports = checkWorkingHours;
