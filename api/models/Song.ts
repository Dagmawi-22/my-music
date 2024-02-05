import mongoose, { Schema, Document } from "mongoose";

export interface ISong extends Document {
  id: number;
  title: string;
  album: string;
  artist: string;
  genre: string;
}

const songSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  album: { type: String, required: true },
  artist: { type: String, required: true },
  genre: { type: String, required: true },
});

songSchema.pre("save", async function (next) {
  const doc = this as ISong;
  if (!doc.isNew) {
    return next();
  }

  try {
    const highest = await Song.findOne().sort({ id: -1 }).limit(1);
    doc.id = (highest?.id || 0) + 1;
    next();
  } catch (error) {
    next(error);
  }
});

const Song = mongoose.model<ISong>("Song", songSchema);

export default Song;
