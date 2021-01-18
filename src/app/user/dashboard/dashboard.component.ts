import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery' ;
import { DataService } from '../../data.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  menuitem = "list";
  constructor(private ds:DataService, private router : Router) { }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
  country(){
    this.menuitem = "country";
  }
  list(){
    this.menuitem = "list";
  }
  setmenu(){
    this.menuitem = "list";
  }
  logout(){
    this.ds.logout().subscribe(info=>{
      console.log(info);
      this.router.navigate(['/admin/login']);
    })
  }
}
