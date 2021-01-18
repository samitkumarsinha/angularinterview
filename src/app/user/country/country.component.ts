import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { User } from '../../User';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  country:User[];
  constructor(private ds:DataService) { }

  ngOnInit(): void {
    this.showlist();
  }
  showlist(){
    this.ds.userlist().subscribe((item)=>{
      console.log(item);
      this.country = item.country;
    })
  }
}
