import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { LeadModule } from "./lead/lead.module";

@Module({
  imports: [PrismaModule, LeadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
