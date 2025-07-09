import { Component } from '@angular/core';

@Component({
  selector: 'app-lockscreen',
  imports: [],
  templateUrl: './lockscreen.html',
  styleUrl: './lockscreen.scss'
})

export class Lockscreen {
  codenumber: any;

  analisaNumero() {
    this.codenumber = document.getElementById('lockscreen-container-form_input-codenumber');
    if (this.codenumber.value != "47") {
      document.querySelector('.lockscreen-container')!.innerHTML = `
      <div class="lockscreen-container-resultado">
        <p class="lockscreen-container-resultado-p">Você digitou o número ${this.codenumber.value}</p>
      </div>
      `;   
    } else {
      console.log("Você sabe o código... Diana?");
    };
  };
};