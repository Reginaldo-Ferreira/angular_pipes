import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

//import { resolve } from 'path';


@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  today: number = Date.now();

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Java', 'Angular 2'];
  filtro: string;

  addCurso(valor) {// adciona mais um livro a variavel 'livros'
    this.livros.push(valor);
    console.log(this.livros);// mostra no cosole o livro adcionado
  }

  obterCursos() {// fica escutando as mudaçã da matriz....array
    //   se a lagura de livros for igural a 0 .. ou o filtro for indefinido ou fitro( tirando os espaços for igual '' nada, retorne os mesmos livros)
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }
    return this.livros.filter(
      v => v.toLocaleLowerCase().includes(this.filtro.toLocaleLowerCase())
    );
  }


  //assíncrono com Promise
  valorAsync = new Promise((resolve, reject) => {//o promise faz a chamada da função setTimeout e aguarda 2s para mostrar o valor "resolve('Valor assíncrono')" que é passado para a variavel 'valorAsync'
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  //assíncrono com Observable
  valorAsync2 = Observable.interval(2000)
    .map(valor => 'Valor assíncrono 2');
    
  constructor() { }

  ngOnInit() {
  }

}
