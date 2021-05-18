import { User } from './user.entity'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { TokensModule } from './tokens/tokens.module'

@Module({
	imports: [TypeOrmModule.forFeature([User]), TokensModule],
	controllers: [UsersController],
	providers: [UsersService]
})
export class UsersModule {}
