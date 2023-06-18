import { Controller,Get } from '@nestjs/common';
import { MemberService } from './member.service';
import { Member } from './schemas/member.schema';

@Controller('members') // route
export class MemberController {
    constructor(private memberService:MemberService){}

    @Get()
    async getAllMembers():Promise<Member[]>{
        return this.memberService.findAll();
    }

}
