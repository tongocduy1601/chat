import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';
import { ConversationEntity } from './conversation.entity';

@Entity('message')
export class MessageEntity extends BaseEntity {
    @ManyToOne(() => UserEntity, (user) => user.message)
    user: UserEntity;

    @ManyToOne(() => ConversationEntity, (conversation) => conversation.message)
    conversation: ConversationEntity;

    @Column()
    content: string;
}
