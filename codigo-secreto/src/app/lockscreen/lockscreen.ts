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
      console.log("Boa tentativa");
    } else {
      console.log("Você sabe o código... Diana?");
    };
  };
};