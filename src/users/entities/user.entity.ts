import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument =  User & Document;

@Schema()
export class User {
    @Prop()
    email: string;

    @Prop()
    name: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
