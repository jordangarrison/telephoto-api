import { Token } from './token.entity'
import { Module } from '@nestjs/common'
import { TokensService } from './tokens.service'
import { TokensController } from './tokens.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
	imports: [TypeOrmModule.forFeature([Token])],
	providers: [TokensService],
	controllers: [TokensController]
})
export class TokensModule {}
