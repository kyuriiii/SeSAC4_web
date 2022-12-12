const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const Album = require("./Album");
const { Diary, Comment } = require("./Diary");
const bcrypt = require('bcrypt');


/* Schema */
const UserSchema = new mongoose.Schema({
    userID: { type: String, unique: true, index: true },
    hashedPW: { type: String },
    username: { type: String, index: true },
    email: { type: String, index: true, sparse: true },
    provider: { type: String, required: true, default: 'local' },
    planet: [{ type: ObjectId, ref: 'Planet' }],
    meta: {
        userInfo: { type: String },
        userImg: { type: String, default: 'default-profile.jpg' },
    },
    bookmarks: {
        Album: [{ type: ObjectId, ref: 'Album' }],
        Diary: [{ type: ObjectId, ref: 'Diary' }],
    },
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });




/* static : Collection 단위, this는 User Collection 전체 */
// 아이디로 사용자 검색
UserSchema.statics.findByUserID = function (userID) {
    console.log('findByUserID: ', userID);
    return this.findOne({ userID });
};
// 이름으로 사용자 검색
UserSchema.statics.findByUserName = function (username) {
    console.log('findByUserName: ', username);
    return this.findOne({ username });
};
// 이메일로 사용자 검색
UserSchema.statics.findByEmail = function (email) {
    console.log('findByEmail: ', email);
    return this.findOne({ email });
};
// 사용자 전체 조회
UserSchema.static('findAll', (callback) => {
    return this.find({}, callback);
});


/* method : Document 단위, this는 User Document 하나 */
// 비밀번호 암호화 (bcrypt)
UserSchema.pre('save', async function (next) {
    // password가 변경(새로 생성)될때만 암호화
    if (this.isModified('hashedPW')) {
        // 비밀번호의 Plain Text를 hash로 교체
        console.log('before PW:', this.hashedPW);
        this.hashedPW = await bcrypt.hash(this.hashedPW, 10);
        console.log('after PW: ', this.hashedPW);
        next(); // Hashing이 끝나면 save로 넘어감
    } else {    // password가 변경되지 않을 때
        next(); // 바로 save로 넘어감
    }
});
// 행성 정보 가져오기
UserSchema.methods.UserPlanet = async function () {
    try {
        return this.find().where('planet').populate('Planet');
    } catch (e) {
        next();
    }
}

// 사용자 탈퇴시 
UserSchema.pre('remove', async function (next) {
    try {
        //TODO 행성에서 멤버 필드 중 배열 원소 삭제
        await Album.deleteMany({ _user: this._id });
        await Diary.deleteMany({ _user: this._id });
        await Comment.deleteMany({ _user: this._id });
        next();
    } catch (e) {
        next();
    }
});


/* virtual : 객체에 가상필드 생성 */
//TODO - 유저 활동
UserSchema.virtual('albums', {
    ref: 'Album',
    localField: '_id',
    foreignField: '_user',
});
UserSchema.virtual('diarys', {
    ref: 'Diary',
    localField: '_id',
    foreignField: '_user',
});
UserSchema.virtual('comments', {
    ref: 'Diary',
    localField: '_id',
    foreignField: '_user',
});


module.exports = mongoose.model('User', UserSchema, 'User');





