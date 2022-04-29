import { Injectable } from '@nestjs/common';

type Product = {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string;
};

@Injectable()
export class ProductService {
	readonly products: Product[] = [
		{
			id: 1,
			name: 'Fidget Spinner',
			description:
				'A pocket friendly fidgeting accessory for your fidgeting needs. Perfect Toy for Fidgeters. Flick And Spin For Hours With Just One Or Both Hands. Great For Anxiety, ADHD, Autism, Quit Smoking, Staying Awake.',
			price: 100,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-v6wG8rdUKE56bkADemIPslZG6_LGQsJcg&usqp=CAU',
		},
		{
			id: 2,
			name: 'Portable Hard Drive for Laptops',
			description:
				'500GB 2.5 Inchs SATA HDD Hard Disk Drive for Apple MacBook Pro 15-inch 15.4-inch MA463LL/A 1.83GHz 15.4-inch MA464LL/A 2.0GHz 15.4-inch MA600LL 2.0GHz 15.4-inch MA601LL 2.16GHz 15.4-inch MA609LL 2.16GHz 17-inch Late 2006 Mid 2007 Laptops',
			price: 4000,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEQE7m4AI-XdDuBy6D1EK3Dw3uIU3j6Uhlg&usqp=CAU',
		},
		{
			id: 3,
			name: 'Laptop',
			description:
				'Acer Aspire 5 Thin And Light Laptop Intel Core I5 11th Gen ( 8 GB/256 GB SSD/ 1TB HDD/Windows 11 Home/MS Office 2021/Intel Iris Xe Graphic) A515-56 With 39.6 Cm (15.6 Inch) FHD Display / 1.65 Kgs',
			price: 50000,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT16BV3Rt6WxQ0CLpFVWL0xv7O01X6LRuXQsg&usqp=CAU',
		},
		{
			id: 4,
			name: 'LG Mobile phone',
			description:
				'The most transformative smartphone experience ever. Swivel from a sleek mobile to a brand new form that redefines multi-viewing and multitasking. See apps both horizontally and vertically for a new level of intuitiveness never reached by any other phone before.',
			price: 20000,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13NULGaubiLDgQl2TgmiuE9g2iVWVYpZzhQ&usqp=CAU',
		},
		{
			id: 5,
			name: 'Airpods',
			description:
				'AirPods will forever change the way you use headphones. Whenever you pull your AirPods out of the charging case, they instantly turn on and connect to your iPhone, Apple Watch, iPad, or Mac.1 Audio automatically plays as soon as you put them in your ears and pauses when you take them out.',
			price: 15000,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbRbHqwVjyvaH2LCZR8j2ofZesP3bAbhOHg&usqp=CAU',
		},
	];

	async fetchProducts(): Promise<Product[] | undefined> {
		return this.products;
	}

	async fetchProductByCriteria(id: number): Promise<Product | undefined> {
		return this.products.filter((product: Product) => product.id === id)[0];
	}
}
