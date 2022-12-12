const router = require('express').Router();
var createError = require('http-errors');

const { User } = require("../../models/User");
const { Planet } = require("../../models/Planet");
const { Category } = require("../../models/Category");
const { Album } = require("../../models/Album");


// const controller = require('../../controllers/Album');

// 특정 다이어리 검색
router.get('/:_id', (req, res) => {
    Album.findOne({ _id: req.params._id }, (err, album) => {
        if (err) res.json(err);
        res.json(album);
    });
});


//~
// 모든 앨범 조회
router.get('/', (req, res) => {

    Album.find()
        .then(r => {
            res.status(200).send({ success: true, msg: r });
        })
        .catch(e => {
            res.status(500).send({ msg: e.message });
        })
    // Album.find()
    //     .sort({ createdAt: 1 })
    //     .exec((err, albums) => {
    //         if (err) return res.json(err);
    //         res.json(albums);
    //     });
});

// 앨범 수정
router.put("/:_id", (req, res) => {
    const _id = req.params._id
    Album.updateOne({ _id }, { $set: req.body })
        .then(r => {
            res.status(200).send({ success: true, msg: r });
        })
        .catch(e => {
            res.status(500).send({ msg: e.message });
        })
});

// 앨범  삭제
router.delete("/:_id", (req, res) => {
    const _id = req.params._id;
    Album.deleteOne({ _id })
        .then(r => {
            res.status(200).send({ success: true, msg: r });
        })
        .catch(e => {
            res.status(500).send({ msg: e.message });
        })
});


// error handler
router.all('*', function (req, res, next) {
    next(createError(404, 'no api'));
});


module.exports = router;