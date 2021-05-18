import { Video } from 'src/videos/video.entity'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { VideosController } from './videos.controller'
import { VideosService } from './videos.service'

@Module({
	imports: [TypeOrmModule.forFeature([Video])],
	controllers: [VideosController],
	providers: [VideosService]
})
export class VideosModule {}
