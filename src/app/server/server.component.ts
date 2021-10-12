import { Component } from '@angular/core'

@Component({
    "selector": "app-server",
    "templateUrl": "./server.component.html",
    "styles": [
        `
        h1 {
            padding: 20px;
            background-color: mistyrose;
            border: 1px solid red
        }
        `
    ]
})
export class ServerComponent { 
    serverId: number= 10;
    serverStatus: string= "offline";
    serverType: string= "Classic CHP"

    getServerType(){
        return this.serverType;
    }
}