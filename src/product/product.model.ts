import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType } from "sequelize-typescript";

export class ProductModel {
    name_car: string ;
    car_number: string ;
    _id: string;
    image: string;
    title: string;
    price: number;
    oldPrice: number;
    credit: number;
    calculatedRating: number;
    description: string;
    advantages: string;
    disAdvantages: string;
    categories: string[];
    tags: string;
    characteristics: {
        [key: string]: string;
    };

    @ApiProperty({example: 'Машина', description: 'Имя машины'})
    @Column({type: DataType.STRING, allowNull: false})
    car_name: string ;

    @ApiProperty({example: 'Госномер', description: 'Номер машины'})
    @Column({type: DataType.STRING, allowNull: false})
    number_car: string;

}