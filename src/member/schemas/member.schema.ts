import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";

export enum Post{
    Manager = "Manager",
    Casher = "Casher",
    

}

@Schema({
    timestamps:true
})

export class Member{
    @Prop()
    Name:string;

    @Prop()
    Salary:number;

    @Prop()
    Post:Post


}

export const MemberSchema = SchemaFactory.createForClass(Member)