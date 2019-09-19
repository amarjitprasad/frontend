import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { HttpService } from 'src/app/_services/http.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth:AuthService, private http:HttpService) { }

  ngOnInit() {
    this.http.getUser().subscribe(
      (data:any)=>{     
        if(data.message.type === "success"){
          console.log(data);
        }               
      },
      error=>{
       Swal.fire('Error',error.error.text,'error');
      }
    )

  }

  logout(){
   this.auth.logout();
  }
}
