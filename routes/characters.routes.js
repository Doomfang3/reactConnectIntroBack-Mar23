const router = require('express').Router()
const axios = require('axios')

/* GET home page */
router.get('/', (req, res, next) => {
  axios
    .get('https://ih-crud-api.herokuapp.com/characters')
    .then(responseFromAPI => {
      // console.log(responseFromAPI)
      /* res.render('characters/list-characters', { characters: responseFromAPI.data }) */
      res.json(responseFromAPI.data)
    })
    .catch(err => console.error(err))
})

router.get('/:id', (req, res, next) => {
  axios
    .get(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
      // console.log("details: ", responseFromAPI.data)
      /* res.render('characters/details-character', { character: responseFromAPI.data }) */
      res.json(responseFromAPI.data)
    })
    .catch(err => console.error(err))
})

router.post('/', async (req, res) => {
  console.log(req.body)
  /*   try {
    const response = await fetch('https://ih-crud-api.herokuapp.com/characters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    })
    console.log(response)
    const parsed = await response.json()
    console.log(parsed)
  } catch (error) {
    console.log(error)
  } */

  axios
    .post(`https://ih-crud-api.herokuapp.com/characters`, req.body)
    .then(responseFromAPI => {
      // console.log("details: ", responseFromAPI.data)
      /* res.render('characters/details-character', { character: responseFromAPI.data }) */
      res.status(201).json(responseFromAPI.data)
    })
    .catch(err => {
      console.error(err)

      res.status(400).json(err)
    })
})

router.put('/:id', (req, res, next) => {
  axios
    .put(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`, req.body)
    .then(responseFromAPI => {
      // console.log("details: ", responseFromAPI.data)
      /* res.render('characters/details-character', { character: responseFromAPI.data }) */
      res.status(200).json(responseFromAPI.data)
    })
    .catch(err => {
      console.error(err)

      res.status(400).json(err)
    })
})

router.delete('/:id', (req, res, next) => {
  axios
    .delete(`https://ih-crud-api.herokuapp.com/characters/${req.params.id}`)
    .then(responseFromAPI => {
      // console.log("details: ", responseFromAPI.data)
      /* res.render('characters/details-character', { character: responseFromAPI.data }) */
      res.status(200).json(responseFromAPI.data)
    })
    .catch(err => {
      console.error(err)

      res.status(400).json(err)
    })
})

module.exports = router

// https://ih-crud-api.herokuapp.com/characters
