import { Album } from './../albums/album.entity'
import { User } from '../users/user.entity'
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean } from 'class-validator'

@Entity()
export class Photo {
	@PrimaryGeneratedColumn()
	id: number

	@ApiProperty()
	@Column({ nullable: true })
	name: string

	@ApiProperty()
	@Column()
	filename: string

	@ApiProperty()
	@Column()
	@ManyToOne(() => User, (user) => user.id)
	user: number

	@ApiProperty()
	@Column()
	@ManyToOne(() => Album, (album) => album.id)
	album: number

	@ApiProperty()
	@Column({ default: false })
	@IsBoolean()
	livePhoto: boolean

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@DeleteDateColumn()
	deletedAt: Date
}
