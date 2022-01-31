import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'TestServer';
  userName = '';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  showDetails = false;
  buttonClicksCount = []

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  isUserNameEmpty(): boolean {
    return this.userName.length == 0;
  }

  resetUsername() {
    this.userName = '';
  }

  toggleShowDetails() {
    this.buttonClicksCount.push(new Date())
    this.showDetails = !this.showDetails;
  }

  getBackGroundColor() {
    return this.buttonClicksCount.length > 4 ? 'blue' : null
  }
}
