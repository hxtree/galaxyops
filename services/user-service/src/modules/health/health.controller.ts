import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { HealthCheckService, HealthCheck } from '@nestjs/terminus';

@Controller({
  version: VERSION_NEUTRAL,
  path: 'health',
})
export class HealthController {
  constructor(private health: HealthCheckService) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([]);
  }
}
