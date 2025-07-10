import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lockscreen',
  imports: [],
  templateUrl: './lockscreen.html',
  styleUrl: './lockscreen.scss'
})

export class Lockscreen {
  codenumber: any;
  
  constructor(private router: Router) { }

  analisaNumero() {
    this.codenumber = document.getElementById('lockscreen-container-form_input-codenumber');
    if (this.codenumber.value != "47") {
      document.querySelector('.lockscreen-container')!.innerHTML = `
      <div class="lockscreen-container-resultado">
        <p class="lockscreen-container-resultado-p">Você digitou o número ${this.codenumber.value}!</p>
      </div>
      `;   
    } else if (this.codenumber.value = "47") {
      this.router.navigate(["/hitman"]);
    }
  };
};