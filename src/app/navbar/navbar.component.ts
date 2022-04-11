import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  // $(document).ready(function(){
  //   $('#formLoad').click(function(){
  //     $('#form').show();
  //   });
  // });
  constructor() { }
  
  ngOnInit(): void {
    $(document).ready(function(){
      $('#formLoad').click(function(){
        $('#form').show();
      });
    });
  }

}
