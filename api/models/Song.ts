import mongoose, { Schema, Document } from "mongoose";

export interface ISong extends Document {
  title: string;
  album: string;
  artist: string;
  genre: string;
}

const songSchema = new Schema({
  title: { type: String, required: true },
  album: { type: String, required: true },
  artist: { type: String, required: true },
  genre: { type: String, required: true },
});

const Song = mongoose.model<ISong>("Song", songSchema);

export default Song;
