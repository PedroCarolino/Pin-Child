import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {

  constructor() { }
  logout() {
    console.log('Usuario Deslogado');
   }

  ngOnInit() {
  }

}
