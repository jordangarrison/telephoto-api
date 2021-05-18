import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module'
import { PhotosModule } from './photos/photos.module'
import { VideosModule } from './videos/videos.module'
import { AlbumsModule } from './albums/albums.module'

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST ?? 'localhost',
			port: Number(process.env.DB_PORT) ?? 5432,
			username: process.env.DB_USER ?? 'telephoto',
			password: process.env.DB_PASSWORD ?? 'telephoto',
			database: process.env.DB_NAME ?? 'telephoto',
			entities: [__dirname + '/**/*.entity{.ts,.js}'],
			synchronize: true
		}),
		UsersModule,
		PhotosModule,
		VideosModule,
		AlbumsModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
