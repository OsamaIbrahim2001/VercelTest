import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageService } from './Services/home-page.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ScrollService } from './Shared/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'UIProject';
  userName:string = '';
  personalPhoto:any ;
  isShowFooter:boolean=true;
  count:number=0;
meetingCount=0;


  constructor(private scrollService: ScrollService,private router:Router,private services:HomePageService){}
   ngOnInit() {
     }

scrollTo(componentId: string) {
  this.scrollService.scrollToComponent(componentId);
}

showMob:boolean=false;
toggileMob(){
this.showMob=!this.showMob;
}

showMenu = false;

toggleMenu() {
  this.showMenu = !this.showMenu;
}

// scrollTo(section: string) {
//   // Implement your scrolling logic here
// }



}



