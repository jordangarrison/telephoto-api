import { User } from './../user.entity'
import { IsUUID } from 'class-validator'
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

@Entity()
export class Token {
	@PrimaryGeneratedColumn()
	id: number

	@ApiProperty()
	@Column('uuid')
	@IsUUID()
	token: string

	@Column()
	@ManyToOne(() => User, (user) => user.id)
	user: number

	@CreateDateColumn()
	createdAt: Date

	@UpdateDateColumn()
	updatedAt: Date

	@DeleteDateColumn()
	deletedAt: Date
}
