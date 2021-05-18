import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Injectable } from '@nestjs/common'
import { Video } from './video.entity'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class VideosService extends TypeOrmCrudService<Video> {
	constructor(@InjectRepository(Video) repo) {
		super(repo)
	}
}
