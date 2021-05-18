import { TokensService } from './tokens.service'
import { Crud, CrudController } from '@nestjsx/crud'
import { Token } from './token.entity'
import { Controller } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Users', 'Tokens')
@Crud({
	model: {
		type: Token
	},
	params: {
		id: {
			field: 'id',
			type: 'number',
			primary: true
		},
		token: {
			field: 'token',
			type: 'uuid'
		}
	}
})
@Controller('tokens')
export class TokensController implements CrudController<Token> {
	constructor(public service: TokensService) {}
}
