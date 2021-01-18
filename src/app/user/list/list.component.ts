import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { User } from '../../User';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users:User[];
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.showlist();
  }
  showlist(){
    this.ds.userlist().subscribe((item)=>{
      console.log(item);
      this.users = item.country;
    })
  }

}
