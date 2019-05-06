import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {
//comnando para criar este pipe 'ng g p camel-case'

  transform(value: any, args?: any): any {

    let values = value.split(' ');
    let result = '';

/**for (let v of values){
    result +=v;
  }*/
    values.forEach(element => {
      console.log(`<for - ${ element } -for>` );// visualizar no terminal do navegador
      result += this.capitalize( element )+ ' ';
    });
    return result.trim();// retirar excesso de espaço
  }

  capitalize(value: string) {
                    // seta somente a primeira letra e transforma em caixa alta
    return value.substr(0, 1).toUpperCase() + // seta primeira letra e transforma em caixa alta
      value.substring(1).toLowerCase();//tira primeira letra e soma com a letra transformada
    //  console.log(`<for - ${ element } -for>` );
        // concatena com o restro da frase
  }

}
