import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { HealthCheckService, HealthCheck } from '@nestjs/terminus';

@Controller({ path: 'health', version: ['1', VERSION_NEUTRAL] })
export class HealthController {
  constructor(private health: HealthCheckService) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([]);
  }
}
