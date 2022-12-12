const Diary = require('../models/Diary');
const Schema = require('../models/index');



exports.createDiary = async (req, res) => {
    const diary = req.body;

    if (typeof diary === 'undefined' || Object.keys(diary).length === 0) {
        throw new TypeError(`diary(${diary}) is empty`);
    }
    const diarys = await Schema.createDiary(diary);

    res.json({ diarys });
}