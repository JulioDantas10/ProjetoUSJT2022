const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Evento = require('../models/Evento');

// rota de teste
router.get('/test', (req, res) => {
  res.send('deu certo');
});

// detalhes do evento
router.get('/view/:id', (req, res) => Evento.findOne({
  where: { id: req.params.id }
}).then(evento => {

  res.render('view', {
    evento
  });

}).catch(err => console.log(err)));

// form da rota de envio
router.get('/add', (req, res) => {
  res.render('add');
})

// add evento via post
router.post('/add', (req, res) => {

  let { title, value, site, date, new_evento, description } = req.body;

  // insert
  Evento.create({
    title,
    value,
    site,
    date,
    new_evento,
    description


  })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

});



module.exports = router
