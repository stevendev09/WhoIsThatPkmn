import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetMethods } from '@methods/methods';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id:string;  
  
  constructor(private router: Router) { 

  }


  ngOnInit(): void {
  }


  getDetail(){
    this.router.navigate(['/playField']);

  }


}
