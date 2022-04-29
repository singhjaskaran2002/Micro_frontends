import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductController } from './modules/product/product.controller';
import { ProductModule } from './modules/product/product.module';
import { ProductService } from './modules/product/product.service';
import { LoggerMiddleware } from './shared/logger.middleware';

@Module({
	imports: [ProductModule],
	controllers: [ProductController],
	providers: [ProductService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('/');
	}
}
