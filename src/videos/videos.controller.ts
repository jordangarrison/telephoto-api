import { VideosService } from './videos.service'
import { Video } from 'src/videos/video.entity'
import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('Videos')
@Crud({
	model: {
		type: Video
	}
})
@Controller('videos')
export class VideosController implements CrudController<Video> {
	constructor(public service: VideosService) {}
}
