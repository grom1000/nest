import { ConnectionOptions } from "typeorm"

 const config: ConnectionOptions = {
      type: 'postgres',
      host: 'localhost',
      port: 6000,
      username: 'nikolaytamarin',
      password: 'enterprise1000',
      database: 'mediumclone',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      cli: {
           migrationsDir: 'src/migrations'
      }
 }

 export default config