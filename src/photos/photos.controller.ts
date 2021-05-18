import { PhotosService } from './photos.service'
import { Photo } from './photo.entity'
import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'

@Crud({
	model: {
		type: Photo
	}
})
@Controller('photos')
export class PhotosController implements CrudController<Photo> {
	constructor(public service: PhotosService) {}
}
