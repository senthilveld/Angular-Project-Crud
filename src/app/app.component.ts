import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang8';
  isEdit:boolean = false;
  userEditObj = {
    userName: "",
    email: "",
    id: ""
 
  }
  constructor(private commonService: CommonService) {

  }
  addUser(userForm: any) {
    console.log("add User", userForm.value);
    let obj = userForm.value;
    obj.id = null;
    this.commonService.createUser(obj).subscribe(data => console.log(data, "datacheck"));
    userForm.form.reset();
    this.commonService.informChild();

  }

  receivedChild(eve: any) {
    console.log(eve, 'receivedChild');
    this.userEditObj = Object.assign({},eve)
    console.log(this.userEditObj,'userEdit')
    this.isEdit = true;

  }

  updateUser(eve:any){
        this.commonService.updateUser(this.userEditObj).subscribe(data=>console.log(data, "user is updated"))
       console.log(eve,'updatedVersion');
       this.commonService.informChild();
    this.isEdit = false;
    eve.form.reset();

  }
}
