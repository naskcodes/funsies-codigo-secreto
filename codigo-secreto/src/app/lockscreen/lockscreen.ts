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
      console.log("Boa tentativa");
      document.getElementById('lockscreen-container-form')!.innerHTML = `<p>Você digitou ${this.codenumber.value}</p>`;
    } else {
      this.router.navigate(["/hitman"]);
    };
  };
};