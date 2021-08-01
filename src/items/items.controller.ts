import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto'
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface'

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService){

    }

    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll()
    }

    @Get(':id')
    findOne(@Param() param): string {

        return `Item  ${param.id}`
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): CreateItemDto {
        return { ...createItemDto }  // single access to property ${createItemDto.name}
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete ${id}`
    }

    @Put(':id')
    update(@Body() updateItemDto, @Param('id') id): string {
        return `Update ${id} - Name: ${updateItemDto.name} `
    }
}
