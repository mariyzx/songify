import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Logger } from 'nestjs-pino';
import { randomUUID } from 'node:crypto';

@Catch()
@Injectable()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: Logger) {}
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Internal server error';

    const requestId =
      (request as Request & { id?: string }).id ?? randomUUID();
    const method = request.method;
    const path = request.originalUrl;
    const logPayload = {
      requestId,
      status,
      message,
      method,
      path,
      timestamp: new Date().toISOString(),
    };

    if (status >= 500) {
      this.logger.error(
        {
          ...logPayload,
          err: exception,
        },
        'Unhandled server error',
      );
    } else if (status >= 400) {
      this.logger.warn(logPayload, 'Client error');
    } else {
      this.logger.debug(logPayload);
    }

    const raw =
      typeof message === 'string' ? message : (message as { message?: unknown }).message;
    const normalizedMessage = Array.isArray(raw) ? raw.join('; ') : raw;

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path,
      requestId,
      message:
        typeof normalizedMessage === 'string'
          ? normalizedMessage
          : 'Internal server error',
    });
  }
}
