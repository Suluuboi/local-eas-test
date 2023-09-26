import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";
import Post from "../models/Post.model";
import Comment from "../models/Post.model";
import migrations from "../models/migrations";
import schema from "./schema";

const adapter = new SQLiteAdapter({
  schema,
  migrations,
  jsi: true,
  onSetUpError: (error) => console.log("[db] failed to set up", error),
});
export const database = new Database({
  adapter,
  modelClasses: [Post, Comment],
});

export default database;
