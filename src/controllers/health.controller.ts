//Health controller
interface HealthResponse {
  message: string;
}

export default class HealthController {
  public async getMessage(): Promise<HealthResponse> {
    return {
      message: "OK",
    };
  }
}
