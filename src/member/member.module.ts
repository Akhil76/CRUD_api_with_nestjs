import { Module } from '@nestjs/common';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberSchema } from './schemas/member.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:'Member', schema:MemberSchema}])],
  controllers: [MemberController],
  providers: [MemberService]
})
export class MemberModule {}
