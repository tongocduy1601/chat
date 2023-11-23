import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
import { MessageEntity } from './message.entity';

@Entity()
export class ConversationEntity extends BaseEntity {
    @ManyToOne(() => UserEntity, (user) => user.conversations)
    @JoinColumn()
    user: UserEntity;

    @Column()
    title: string;

    @OneToMany(() => MessageEntity, (message) => message.conversation)
    message: MessageEntity[];
}
