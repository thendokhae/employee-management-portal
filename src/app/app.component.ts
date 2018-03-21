import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from './shared-components/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'app';
  private _router: Subscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  constructor(public location: Location, private router: Router){}

  ngOnInit() {
    $.material.init();
    // const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
    // const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');

    // this.location.subscribe((ev:PopStateEvent) => {
    //     this.lastPoppedUrl = ev.url;
    // });
    //  this.router.events.subscribe((event:any) => {
    //     this.navbar.sidebarClose();
    //     if (event instanceof NavigationStart) {
    //        if (event.url != this.lastPoppedUrl)
    //            this.yScrollStack.push(window.scrollY);
    //    } else if (event instanceof NavigationEnd) {
    //        if (event.url == this.lastPoppedUrl) {
    //            this.lastPoppedUrl = undefined;
    //            window.scrollTo(0, this.yScrollStack.pop());
    //        } else
    //            window.scrollTo(0, 0);
    //    }
    // });
    // this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
    //      elemMainPanel.scrollTop = 0;
    //      elemSidebar.scrollTop = 0;
    // });
}

isLogin(path){
  var title = this.location.prepareExternalUrl(this.location.path());
  title = title.slice( 1 );
  if(path === title){
      return false;
  }
  else {
      return true;
  }


}

}
