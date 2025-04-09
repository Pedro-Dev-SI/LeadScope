import { Test, TestingModule } from "@nestjs/testing";
import { LeadController } from "./lead.controller";

describe("LeadController", () => {
  let controller: LeadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeadController],
    }).compile();

    controller = module.get<LeadController>(LeadController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
