import { ApiProperty } from '@nestjs/swagger'
import { Album } from 'src/albums/album.entity'
import { User } from 'src/users/user.entity'
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'

@Entity()
export class Video {
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

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@DeleteDateColumn()
	deletedAt: Date
}
