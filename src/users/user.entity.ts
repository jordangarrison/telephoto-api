import { Token } from './tokens/token.entity'
import { Photo } from '../photos/photo.entity'
import { ApiProperty } from '@nestjs/swagger'
import { IsDate, IsEmail, IsPhoneNumber } from 'class-validator'
import {
	Column,
	CreateDateColumn,
	DeleteDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'
import { Video } from 'src/videos/video.entity'

type userRole = 'user' | 'admin' | 'owner'

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number

	@ApiProperty()
	@Column({ unique: true })
	username: string

	@ApiProperty()
	@Column({ nullable: true })
	firstName: string

	@ApiProperty()
	@Column({ nullable: true })
	lastName: string

	@ApiProperty()
	@Column({ nullable: true })
	@IsPhoneNumber()
	phoneNumber: string

	@ApiProperty()
	@Column({ nullable: true })
	@IsEmail()
	email: string

	@ApiProperty()
	@Column({ default: 'user' })
	role: userRole

	@ApiProperty()
	@Column()
	@IsDate()
	dateOfBirth: Date

	@Column('int', { array: true, default: [] })
	@OneToMany(() => Token, (token) => token.id)
	tokens: Token[]

	@Column('int', { array: true, default: [] })
	@OneToMany(() => Photo, (photo) => photo.id)
	photos: Photo[]

	@Column('int', { array: true, default: [] })
	@OneToMany(() => Video, (video) => video.id)
	video: Video[]

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	@IsDate()
	updatedAt: Date

	@DeleteDateColumn()
	@IsDate()
	deletedAt: Date
}
