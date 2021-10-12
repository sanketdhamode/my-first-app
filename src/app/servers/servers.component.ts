import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowAddNewServer: boolean=false;
  serverMessage:string="No server exists yet!";
  serverName:string="";
  serverCreated:boolean=false;
  servers= ['usld1235', 'usld34555'];

  constructor() {
    setTimeout(()=>{
      this.allowAddNewServer=true;
    
    }, 2000);
   }

  ngOnInit(): void {
  }

  getAllowAddNewServer(){
    return this.allowAddNewServer;
  }

  onClickAddServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverMessage=this.serverName+" server was created!";
  }

  onUpdateServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
