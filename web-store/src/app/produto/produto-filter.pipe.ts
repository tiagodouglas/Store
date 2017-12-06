import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
    name: 'produtoFilter'
})
export class ProdutoFilterPipe implements PipeTransform {
    transform(items: any[], value: string): any[] {
        if (!items) {
            return [];
        }
        if (!value) {
            return items;
        }
        return items.filter(singleItem => 
            singleItem['nome'].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value.toLowerCase()) ||  
            singleItem['precoUnitario'].toString().replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value.toLowerCase()) ||
            singleItem['categoria']['nome'].replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value.toLowerCase()) ||
            singleItem['marca']['nome'].replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value.toLowerCase())
        );
    }
}