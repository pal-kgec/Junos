import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_model/user';
import { AccountService } from './_services/account.service';
import { PresenceService } from './_services/presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DatingApp';
  users:any;


  constructor(private http: HttpClient, private accountService: AccountService, private presence : PresenceService){}

  ngOnInit() {
    // this.getUsers();
    this.setCurrentUser();

  }

  setCurrentUser(){
    const user:User=JSON.parse(localStorage.getItem('user') ||'{}')
    if(user?.token){
      this.accountService.setCurrentUser(user)
      this.presence.CreateHubConnection(user)
    }
    else{
      this.accountService.setCurrentUser(null!)
    }
    
  }

  // getUsers(){
  //   this.http.get("https://localhost:5001/api/users").subscribe(response=>{
  //     this.users=response
  //   }, error=>{
  //     console.log(error)
  //   })

  // }
}
