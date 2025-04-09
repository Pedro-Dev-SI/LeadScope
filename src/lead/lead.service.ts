import { Injectable } from "@nestjs/common";
import { Lead } from "generated/prisma";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class LeadService {
    constructor(private prisma: PrismaService) {}

    createLead(data: Partial<Lead>): Lead {
        return this.prisma.lead.create({
            data,
        });
    }

    getAllLeads(): Promise<Lead[]> {
        return this.prisma.lead.findMany();
    }
}
