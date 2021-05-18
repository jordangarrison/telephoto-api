import { Photo } from './../photos/photo.entity'
import { User } from '../users/user.entity'
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { Video } from 'src/videos/video.entity'

@Entity()
export class Album {
	@PrimaryGeneratedColumn()
	id: number

	@ApiProperty()
	@Column({ nullable: true })
	name: string

	@ApiProperty()
	@Column()
	@ManyToOne(() => User, (user) => user.id)
	user: number

	@Column('int', { array: true, default: [] })
	@OneToMany(() => Photo, (photo) => photo.id)
	photos: Photo[]

	@Column('int', { array: true, default: [] })
	@OneToMany(() => Video, (video) => video.id)
	video: Video[]

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@DeleteDateColumn()
	deletedAt: Date
}
