import { Component } from "@angular/core";
import { User } from '../user';
import { RegisterService } from './register-service';

@Component({
    selector: "register",
    templateUrl:"register.component.html"
})

export class RegisterComponent{
    users: User[]

    constructor(public rs:RegisterService){

    }
    register(pform){
        let url = "http://localhost:8081/addUser";
    console.log(url);
    this.rs.retriveFromServer(url).subscribe(
      data => {
        this.users = data;
        console.log(data);
      });
    }
}