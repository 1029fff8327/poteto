import { Module } from '@nestjs/common';
import { PostsService } from './post.service'; 
import { PostsController } from './post.controller'; 
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Post } from './post.model'; 
import { FilesModule } from 'src/files/files.module';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
     SequelizeModule.forFeature([User, Post]),
     FilesModule
  ]
})
export class PostsModule {}
