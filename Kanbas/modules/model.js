import mongoose from "mongoose";
import schema from "./schema.js";
const Model = mongoose.model("modules", schema);
export default Model;