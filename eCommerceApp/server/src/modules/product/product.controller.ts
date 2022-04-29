import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
	constructor(private productService: ProductService) {}

	@Get('')
	@HttpCode(200)
	async fetchProducts(): Promise<any> {
		return await this.productService.fetchProducts();
	}

	@Get(':id')
	@HttpCode(200)
	async fetchProductByCriteria(@Param('id') id: number): Promise<any> {
		return await this.productService.fetchProductByCriteria(+id);
	}
}
