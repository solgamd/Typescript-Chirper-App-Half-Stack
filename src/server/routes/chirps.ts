import { Router } from 'express';
import * as chirpstore from '../utils/chirpstore';

const router = Router();

// router.get('/:id?', (req, res) => { //REMOVE ID IF ONLY WANT THIS ROUTE TO GET ALL CHIRPS
//     // const data = [
//     //     {
//     //         id: 1,
//     //         user: "Tolita",
//     //         text: "I barf a lot!"
//     //     },
//     //     {
//     //         id: 2,
//     //         user: "Mishkita",
//     //         text: "I eat twice as much as Toli!"
//     //     }
//     // ]
//     // res.json(data);
    
//     let id = req.params.id;
//     if (id) {
//         res.json(chirpstore.GetChirp(id));
//     } else {
//         let chirps = chirpstore.GetChirps();
//         let data = Object['keys'](chirps).map(key => {
//             return {
//                 id: key,
//                 user: chirps[key].user,
//                 text: chirps[key].text
//             }
//         });
//         // data.pop();
//         res.json(data);
//     }

// });

router.get('/', (req, res) => {
    let chirps = chirpstore.GetChirps();
    // let data = Object['keys'](chirps).map(key => {
    //     return {
    //         id: key,
    //         user: chirps[key].user,
    //         text: chirps[key].text
    //     }
    // });
    res.json(chirps);
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.json(chirpstore.GetChirp(id))
});

router.post('/', (req, res) => { 
    chirpstore.CreateChirp(req.body);
    res.sendStatus(200);            // Challenge: make this respond with chirps instead
});

router.put('/:id/admin', (req, res) => { 
    let id = req.params.id;
    let chirp = req.body;
    chirpstore.UpdateChirp(id, chirp);
    res.sendStatus(200);            
});

export default router;