import { AlbumsService } from './albums.service'
import { Album } from './album.entity'
import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Albums')
@Crud({
	model: {
		type: Album
	}
})
@Controller('albums')
export class AlbumsController implements CrudController<Album> {
	constructor(public service: AlbumsService) {}
}
