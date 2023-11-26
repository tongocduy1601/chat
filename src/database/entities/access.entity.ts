import { Column, Entity, OneToOne } from 'typeorm';
import { UserEntity } from './user.entity';
import { BaseEntity } from './base.entity';

@Entity('access')
export class AccessEntity extends BaseEntity {
    @OneToOne(() => UserEntity, (user) => user.access)
    user: UserEntity;

    @Column({ nullable: true })
    token: string;
}
