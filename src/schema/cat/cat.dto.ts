import { Document } from 'mongoose'

export interface CatDto extends Document {
  readonly name: string;
  readonly password: string;
  readonly phone: number;
  readonly email: string;
  readonly times: number;

}