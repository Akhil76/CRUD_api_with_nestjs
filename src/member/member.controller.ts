import { Body, Controller,Get, Param, Post } from '@nestjs/common';
import { MemberService } from './member.service';
import { Member } from './schemas/member.schema';

@Controller('members') // route
export class MemberController {
    constructor(private memberService:MemberService){}

    @Get()
    async getAllMembers():Promise<Member[]>{
        return this.memberService.findAll();
    }

    @Get(':id')
    async getMember(
        @Param('id')
        id:string,
    ):Promise<Member>{
        return this.memberService.findById(id);
    }

    @Post()
    async createMember(
        @Body()
        member,
    ): Promise<Member>{
        return this.memberService.create(member);
    }

}
