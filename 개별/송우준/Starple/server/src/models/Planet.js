const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const User = require('./User');
const Album = require("./Album");
const Diary = require("./Diary");

/* Schema */
const PlanetSchema = mongoose.Schema(
  {
    name: { type: String },
    select: { type: Number, default: 0 },
    member: [{ type: ObjectId, ref: "User" }],
    payment: {
      status: { type: Boolean, default: 0 },
      maxNum: { type: Number, default: 0 },
    },
    category: {
      Album: { type: Array, default: ["2022"] },
      Diary: { type: Array, default: ["2022"] },
    },
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);


/* static : Collection 단위*/
// 행성이름으로 행성 검색
PlanetSchema.statics.findByName = function (name) {
  return this.findOne({ name });
};
// 멤버아이디나 이름으로 행성 검색
PlanetSchema.statics.findByMember = async function (userID, username) {
  const exMember = await User.find().or([{ userID }, { username }]);
  return this.find().in('member', [exMember._id]);
};

// // 사용자 전체 조회
// PlanetSchema.static('findAll', (callback) => {
//     return this.find({}, callback);
// });


/* method : Document 단위*/
PlanetSchema.pre('remove', async function (next) {
  const planet = this;
  try {
    await Album.deleteMany({ _planet: planet._id });
    await Diary.deleteMany({ _planet: planet._id });
    next();
  } catch (e) {
    next();
  }
});

/* static */




module.exports = mongoose.model('Planet', PlanetSchema, 'Planet')

