import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isHidden: boolean= true;
  router: any;
  constructor() { }

  ngOnInit() {

    console.log("window");
    if(JSON.parse(localStorage.getItem('userDetails'))['token']!=null){
      this.isHidden=false;
      console.log(JSON.parse(localStorage.getItem('userDetails'))['token']);
      this.router.navigate(['./book_seat']);
    }
    else{
      this.isHidden=true;
      this.router.navigate(['./user_login']);
    }
  }

}
