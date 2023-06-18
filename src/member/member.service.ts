import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Member } from './schemas/member.schema';

@Injectable()
export class MemberService {
    constructor(
        @InjectModel(Member.name)
        private memberModel: mongoose.Model<Member>
    ){}


    async findAll(): Promise<Member[]>{
        const members = await this.memberModel.find();
        return members;
    }

    async findById(id:string): Promise<Member>{
        const member = await this.memberModel.findById(id);
        return member;
    }

    async create(member:Member): Promise<Member>{
        const response = await this.memberModel.create(member);
        return response;
    }

}
