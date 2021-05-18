import { UsersService } from './users.service'
import { User } from './user.entity'
import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Users')
@Crud({
	model: {
		type: User
	},
	params: {
		username: {
			field: 'username',
			type: 'string',
			primary: true
		}
	}
})
@Controller('users')
export class UsersController implements CrudController<User> {
	constructor(public service: UsersService) {}
}
