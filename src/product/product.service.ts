import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto'; 

@Injectable()
export class ProductService {

    constructor(private productService: ProductService) {
        
    }

    async search(dto: CreateProductDto) {
        
    }

}
 