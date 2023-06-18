import { Module } from '@nestjs/common';
import { SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Role } from './roles/roles.model'; 
import { User } from './users/users.model';
import { UserRoles } from './roles/user-role.model';
import { Post } from './post/post.model';
import * as path from 'path'
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { RolesModule } from './roles/roles.module';
import { PostsModule } from './post/post.module';
import { FilesModule } from './files/files.module';
import { ProductModule } from './product/product.module';
import * as dotenv from 'dotenv'
dotenv.config()
@Module({
  controllers:[],
  providers: [],
  imports: [
    ConfigModule.forRoot({
     envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
      SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        models: [User, Role, UserRoles, Post],
        autoLoadModels: true,
        
    }),
    UsersModule,
    AuthModule,
    RolesModule,
    PostsModule,
    FilesModule,
    ProductModule,
  ],
})
export class AppModule {}
