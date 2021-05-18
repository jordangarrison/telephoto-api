import { Photo } from './photo.entity'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class PhotosService extends TypeOrmCrudService<Photo> {
	constructor(@InjectRepository(Photo) repo) {
		super(repo)
	}
}
