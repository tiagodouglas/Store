import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
    name: 'vendedorFilter'
})
export class VendedorFilterPipe implements PipeTransform {
    transform(items: any[], value: string): any[] {
        if (!items) {
            return [];
        }
        if (!value) {
            return items;
        }
        return items.filter(singleItem => 
            singleItem['nome'].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value.toLowerCase()) ||  
            singleItem['endereco'].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value.toLowerCase()) ||
            singleItem['cpf'].toString().toLowerCase().includes(value.toLowerCase()) ||
            singleItem['telefone'].toString().toLowerCase().includes(value.toLowerCase())
        );
    }
}