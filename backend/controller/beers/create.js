const axios = require('axios');

const createBeer = (req, res) => {
  const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by } = req.body;

  const beerObject = {
    name,
    tagline,
    description,
    first_brewed,
    brewers_tips,
    attenuation_level,
    contributed_by
  }


  axios.post('https://ih-beers-api2.herokuapp.com/beers/new', beerObject)
  .then((beer) => {
    const { message } = beer.data;
    res.status(200).json({ message });
  })
  .catch(err => {
    res.status(500).json({ message: 'Deu ruim ao conectar no servidor.' })
  });
};

module.exports = createBeer;