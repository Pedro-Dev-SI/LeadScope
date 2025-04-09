import { Body, Controller, Get, Post } from "@nestjs/common";
import { LeadService } from "./lead.service";

@Controller("lead")
export class LeadController {
    constructor(private leadService: LeadService) {}

    @Post('/create')
    createLead(@Body() leadData: any) {
        return this.leadService.createLead(leadData);
    }

    @Get()
    getAllLeads() {
        return this.leadService.getAllLeads();
    }
}
