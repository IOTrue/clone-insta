import { Exclude } from 'class-transformer';
import { CommentEntity } from 'src/Comments/comments.entity';
import { FollowEntity } from 'src/Follows/follows.entity';
import { PostEntity } from 'src/Posts/posts.entity';
import { UserCommentLikeEntity } from 'src/UserCommentLikes/userCommentLikes.entity';
import { UserCommentTagEntity } from 'src/UserCommentTags/userCommentTags.entity';
import { UserPostLikeEntity } from 'src/UserPostLikes/userPostLikes.entity';
import { UserPostTagEntity } from 'src/UserPostTags/userPostTags.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'User' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Exclude()
  @Column({ type: 'varchar', length: 32 })
  password: string;

  @Column({ type: 'varchar', length: 10 })
  nickname: string;

  @Column({ type: 'varchar', length: 30 })
  name: string;

  @Column({ type: 'text' })
  profileImg: string;

  //*   Relation    */

  //*   User | 1 : M | Post
  @OneToMany(() => PostEntity, (post) => post.user, {
    cascade: true,
  })
  post: PostEntity[];

  //*   User | 1 : M | Comment
  @OneToMany(() => CommentEntity, (comment) => comment.user, {
    cascade: true,
  })
  comment: CommentEntity[];

  //*   User | 1 : M | UserPostLike
  @OneToMany(() => UserPostLikeEntity, (userPostLike) => userPostLike.user, {
    cascade: true,
  })
  userPostLike: UserPostLikeEntity[];

  //*   User | 1 : M | UserCommentLike
  @OneToMany(
    () => UserCommentLikeEntity,
    (userCommentLike) => userCommentLike.user,
    {
      cascade: true,
    },
  )
  userCommentLike: UserCommentLikeEntity[];

  //*   User | 1 : M | UserPostTag
  @OneToMany(() => UserPostTagEntity, (userPostTag) => userPostTag.user, {
    cascade: true,
  })
  userPostTag: UserPostTagEntity[];

  //*   User | 1 : M | UserCommentTag
  @OneToMany(
    () => UserCommentTagEntity,
    (userCommentTag) => userCommentTag.user,
    {
      cascade: true,
    },
  )
  userCommentTag: UserCommentTagEntity[];

  //*   User | 1 : M | Follow
  @OneToMany(() => FollowEntity, (follower) => follower.user, {
    cascade: true,
  })
  follower: FollowEntity[];

  @OneToMany(() => FollowEntity, (followee) => followee.user, {
    cascade: true,
  })
  followee: FollowEntity[];
}
