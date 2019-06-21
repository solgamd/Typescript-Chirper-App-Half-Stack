const express = require('express');
const chirpstore = require('../chirpstore');

let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    if (id) {
        res.json(chirpstore.GetChirp(id));
    } else {

        let chirps = chirpstore.GetChirps();
        let data = Object.keys(chirps).map(key => {
            return {                   
                user: chirps[key].user,
                text: chirps[key].text,
                id: key
            }
        });        
        data.pop();                        
        res.send(data);
    }
});

router.post('/', (req, res) => {
    chirpstore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    chirpstore.DeleteChirp(id);
    res.sendStatus(200);
});

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let chirp = req.body;
    chirpstore.UpdateChirp(id, chirp);
    res.sendStatus(200);
})

module.exports = router;