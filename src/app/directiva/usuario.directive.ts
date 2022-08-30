import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Mensaje } from '../Entidades/mensaje';

@Directive({
  selector: '[appUsuario]'
})
export class UsuarioDirective implements OnChanges {
@Input() 
  appUsuario:Mensaje=new Mensaje();

  constructor(private elemento :ElementRef ) {
   }

   //siempre que cambia el elemento
   ngOnChanges(changes: SimpleChanges): void {
    this.elemento.nativeElement.innerHTML = '<div class="row">'+
    '<div class="col-2">' + this.appUsuario.usuario   +'</div>'+
    '<div class="col-8">' + this.appUsuario.texto   +'</div>'+
    '<div class="col-2">' + (this.appUsuario.fecha?(new Date(this.appUsuario.fecha)).toLocaleString():"")   +'</div>'+
    '</div>';
  }

   @HostListener('mouseenter') entraMouse(){
    this.elemento.nativeElement.style.backgroundColor = 'yellow';
   }

   @HostListener('mouseleave') saleMouse(){
    this.elemento.nativeElement.style.backgroundColor = 'white';
   }


}
