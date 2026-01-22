import { SetMetadata } from '@nestjs/common';

export const SkipThrottle = () => SetMetadata('skipThrottle', true);
