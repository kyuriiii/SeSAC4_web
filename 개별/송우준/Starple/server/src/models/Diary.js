const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

/* Schema */
const DiarySchema = new Schema(
  {
    title: { type: String, default: "", index: true },
    content: { type: String, default: "" },
    cnt: {
      view: { type: Number, default: 0 },
      like: { type: Number, default: 0 },
    },
    _user: { type: ObjectId, ref: "User", index: true },
    _planet: { type: ObjectId, ref: "Planet", index: true },
    _category: { type: String, default: "" },
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

const CommentSchema = new Schema(
  {
    content: { type: String, default: "" },
    parentComment: { type: ObjectId, ref: "Comment" }, // self referencing relationship
    depth: { type: Number, default: 1 },
    isDeleted: { type: Boolean, default: false }, // 하위댓글의 orphaned 방지하기 위해 isDeleted: true로 표시
    writer: { type: String, default: "" },
    _diary: { type: ObjectId, ref: "Diary", index: true },
  },
  { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

/* virtual */
DiarySchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "diary",
});

CommentSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "parentComment",
});
// 부모로부터 자식 찾아 내려가게끔 자식 댓글들의 정보를 가지는 항목을 virtual 항목으로 추가
CommentSchema.virtual("childComments")
  .get(function () {
    return this._childComments;
  })
  .set(function (v) {
    this._childComments = v;
  });

/* method */
// DiarySchema.methods.createDiary = function (title, text) {
//     const diary = new this({
//         title: title,
//         text: text
//     });
//     return diary.save();
// };

DiarySchema.pre("remove", async function (next) {
  const diary = this;
  try {
    await Comment.deleteMany({ diary: diary._id });
    next();
  } catch (e) {
    next();
  }
});

/* static */

const Diary = mongoose.model("Diary", DiarySchema, "Diary");
const Comment = mongoose.model("Comment", CommentSchema, "Comment");

module.exports = { Diary, Comment };
