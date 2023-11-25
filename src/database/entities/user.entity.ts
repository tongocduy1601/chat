import { Column, Entity, OneToMany } from 'typeorm';
import { AccessEntity } from './access.entity';
import { BaseEntity } from './base.entity';
import { ConversationEntity } from './conversation.entity';
import { MessageEntity } from './message.entity';

@Entity()
export class UserEntity extends BaseEntity {
    @Column()
    username: string;
    @Column({
        nullable: true,
    })
    firstName: string;

    @Column({
        nullable: true,
    })
    middleName: string;

    @Column({
        nullable: true,
    })
    lastName: string;

    @Column({
        nullable: true,
    })
    email: string;

    @Column({
        nullable: true,
    })
    phone: string;

    @Column({
        nullable: true,
    })
    avatar: string;

    @Column({
        nullable: true,
    })
    isActive: boolean;

    @Column({})
    password: string;

    @OneToMany(() => AccessEntity, (access) => access.user)
    access: AccessEntity;

    @OneToMany(() => ConversationEntity, (conversation) => conversation.user)
    conversations: ConversationEntity[];

    @OneToMany(() => MessageEntity, (message) => message.user)
    message: MessageEntity;
}
