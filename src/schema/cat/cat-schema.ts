import { Schema } from 'mongoose';
// 创建一个文档架构
export const UserSchema = new Schema({
  name: {
    type: String,
    unique:true,
    dropDups:true
  },
  password: {
    type:String,
    select:false
  },
  phone: Number,
  email: String,
  times: Number,
});