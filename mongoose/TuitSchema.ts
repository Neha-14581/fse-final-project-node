/**
 * @file Implements mongoose schema for Tuit
 */

import mongoose, {Schema} from "mongoose";
import Tuit from "../models/Tuit";

/**
 * @typedef Tuit Represents tuits posted on the tuit website
 * @property {string} tuit the description or content of the tuit
 * @property {ObjectId[]} postedBy Array of User IDs
 * @property {Date} postedOn the date on which the tuit was posted
 */
 const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: {type: String, required: true},
    postedByUsername: String,
    postedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    postedOn: {type: Date, default: Date.now},
    image: String,
    youtube: String,
    avatarLogo: String,
    imageOverlay: String,
    stats: {
        replies: {type: Number, default: 0},
        retuits: {type: Number, default: 0},
        likes: {type: Number, default: 0},
        dislikes: {type: Number, default: 0},
        bookmarks: {type: Number, default: 0},
        unbookmarks: {type: Number, default: 0}
    }
}, {collection: "tuits"});
export default TuitSchema;