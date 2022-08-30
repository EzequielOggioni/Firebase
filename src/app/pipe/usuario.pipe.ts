import { Pipe, PipeTransform } from '@angular/core';
import { Mensaje } from '../Entidades/mensaje';

@Pipe({
  name: 'usuario'
})
export class UsuarioPipe implements PipeTransform {

  transform(value: Mensaje):string {
    return value.usuario + ': ' + value.texto;
  }

}
