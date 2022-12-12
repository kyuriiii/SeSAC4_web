const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;


/* Schema */
const AlbumSchema = new Schema({
    planet: { type: ObjectId, required: true, ref: 'Planet' },
    user: { type: ObjectId, required: true, ref: 'User' },
    title: { type: String },
    image: [{ type: String, required: true }],
    tags: [{ type: String }],
    Bookmark: {
        markBy: [{ type: ObjectId, ref: 'User' }],
        markNum: { type: Number, default: 0 }
    }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });


/* virtual */
/* method */
/* static */

module.exports = mongoose.model('Album', AlbumSchema, 'Album');
