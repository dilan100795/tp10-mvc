

module.exports = {
    home : (req,res) => {
       return res.render ('home.html') 
    },
    about: (req,res) => {
        return res.render('about.html')
    },
};