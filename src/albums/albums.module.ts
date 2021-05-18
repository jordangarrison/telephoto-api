import { Album } from './album.entity'
import { Module } from '@nestjs/common'
import { AlbumsService } from './albums.service'
import { AlbumsController } from './albums.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
	imports: [TypeOrmModule.forFeature([Album])],
	providers: [AlbumsService],
	controllers: [AlbumsController]
})
export class AlbumsModule {}
