import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		const debugInfo = `[${new Date().toLocaleString()}] ${
			req.originalUrl
		} ${req.method} ${res.statusCode}\n`;
		fs.appendFile(__dirname + '/../../api.log', debugInfo, (err: any) => {
			if (err) throw err;
		});
		next();
	}
}
