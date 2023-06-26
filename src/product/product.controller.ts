import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ProductModel } from './product.model';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {
        
    }

    @Post('create')
    async create(@Body() dto: Omit<ProductModel, '_id'>) {
    
    }

    
     @Get(':id')
    async get(@Param('id') id: string) {

    }

    @Delete('id')
    async delete(@Param('id') id: string) {

    }
    
    @HttpCode(200)
    @Post('')
    async find(@Body() dto: CreateProductDto) {

    }

    @Post('/search')
    search(@Body() dto: CreateProductDto) {
        return this.productService.search(dto)
    }
}

