import { Router } from 'express';
import chirpstore from '../utils/chirpstore';

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
//     //         text: "I eat twice as much food as Toli!"
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
    let data = Object['keys'](chirps).map(key => {
        return {
            id: key,
            user: chirps[key].user,
            text: chirps[key].text
        }
    });
    res.json(data);
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.json(chirpstore.GetChirp(id))
});

router.post('/', (req, res) => {
    chirpstore.CreateChirp(req.body);
    res.sendStatus(200);
});

export default router;