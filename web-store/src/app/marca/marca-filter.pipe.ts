import { Pipe, PipeTransform, Injectable } from '@angular/core';
@Pipe({
    name: 'marcaFilter'
})
export class MarcaFilterPipe implements PipeTransform {
    transform(items: any[], value: string): any[] {
        if (!items) {
            return [];
        }
        if (!value) {
            return items;
        }
        return items.filter(singleItem => 
            singleItem['nome'].normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value.toLowerCase())         
        );
    }
}