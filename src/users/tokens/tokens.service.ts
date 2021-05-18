import { Token } from './token.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'

@Injectable()
export class TokensService extends TypeOrmCrudService<Token> {
	constructor(@InjectRepository(Token) repo) {
		super(repo)
	}
}
