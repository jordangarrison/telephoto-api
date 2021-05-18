import { Album } from './album.entity'
import { Injectable } from '@nestjs/common'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class AlbumsService extends TypeOrmCrudService<Album> {
	constructor(@InjectRepository(Album) repo) {
		super(repo)
	}
}
