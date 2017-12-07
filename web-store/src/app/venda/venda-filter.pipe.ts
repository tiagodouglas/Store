import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
    name: 'vendaFilter'
})
export class VendaFilterPipe implements PipeTransform {
    transform(items: any[], value: string): any[] {
        if (!items) {
            return [];
        }
        if (!value) {
            return items;
        }
        return items.filter(singleItem => 
            singleItem['nome'].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value.toLowerCase()) ||  
            singleItem['total'].toString().replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value.toLowerCase()) ||
            singleItem['cliente']['nome'].replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value.toLowerCase()) ||
            singleItem['vendedor']['nome'].replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value.toLowerCase()) ||
            singleItem['dataVenda'].toString().toLowerCase().includes(value.toLowerCase())
        );
    }
}