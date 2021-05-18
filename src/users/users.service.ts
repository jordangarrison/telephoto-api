import { User } from './user.entity'
import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class UsersService extends TypeOrmCrudService<User> {
	constructor(@InjectRepository(User) repo) {
		super(repo)
	}
}
