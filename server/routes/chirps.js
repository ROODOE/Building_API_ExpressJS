const express = require('express');
let router = express.Router();
let chirpStore = require('../chirpstore')

router.get('/:id?', (req, res) => {
    let id = req.params.id
    if(id) {
        res.send(chirpStore.GetChirp(id));
    } else {
        res.send(chirpStore.GetChirps());
    }
});

router.post('/', (req, res) => {
    chirpStore.CreateChirp(req.body);
    res.sendStatus(200);
})

router.put('/:id?', (req, res) => {
    let id = req.params.id
    let chirp = req.body
    res.send(chirpStore.UpdateChirp(id, chirp));
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    res.send(chirpStore.DeleteChirp(id));
});

// router.get('/:id?', (req, res) => {
//     let id = req.params.id
//     if(id) {
//         res.json(chirpStore.GetChirp(id));
//     } else {
//         res.send(chirpStore.GetChirps());
//     }
// });

// router.post('/', (req, res) => {
//     chirpStore.CreateChirp(req.body);
//     res.sendStatus(200);
// })


module.exports = router;