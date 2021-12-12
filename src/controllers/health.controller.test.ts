import HealthController from "./health.controller";

test("should return OK message", async () => {
  const controller = new HealthController();
  const response = await controller.getMessage();
  expect(response.message).toBe("OK");
});
