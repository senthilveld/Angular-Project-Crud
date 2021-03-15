import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  allUsers: any;
 @Output() sendToParent = new EventEmitter();
  constructor(private commonService:CommonService){}

  ngOnInit(): void {
    this.commonService.userAdded.subscribe(data=>{
      console.log('user added',data);
      this.getLatestUsers();
    })
    this.getLatestUsers();
  }

  getLatestUsers(){
    this.commonService.getLatestUsers().subscribe(data=>{
      this.allUsers = data;
      console.log(this.allUsers,'datachild')
    })

}

editUser(u:any){
  this.sendToParent.emit(u);
}

deleteUser(d:any){
  this.commonService.deleteUser(d).subscribe(res => {
    this.getLatestUsers();
  }
  )
}

}
