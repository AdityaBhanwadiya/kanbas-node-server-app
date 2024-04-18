import { Schema } from "mongoose";

const lessonSchema = new Schema({
    id: String,
    name: String,
    description: String,
    module: String
  });

const ModuleSchema = new Schema({
    id: {type:String, required:true, unique:true},
    name: String,
    description: String,
    course: String,
    lessons: [lessonSchema]
  },
  { collection: "modules" });
export default ModuleSchema;
