import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); // 获取请求上下文
    const response = ctx.getResponse(); // 获取请求上下文中的 response对象

    const status = exception.getStatus(); // 获取异常状态码

    const exceptionResponse = exception.getResponse();
    console.log(exceptionResponse);
    response.status(status);
    if (typeof exceptionResponse === 'string') {
      response.send({
        data: null,
        message: exceptionResponse,
        code: status,
      });
    } else {
      response.send(exceptionResponse);
    }

    console.log(exception.message);
  }
}
