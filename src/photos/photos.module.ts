import { Photo } from './photo.entity'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PhotosController } from './photos.controller'
import { PhotosService } from './photos.service'

@Module({
	imports: [TypeOrmModule.forFeature([Photo])],
	controllers: [PhotosController],
	providers: [PhotosService]
})
export class PhotosModule {}
