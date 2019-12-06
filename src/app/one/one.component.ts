import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from'@angular/forms';
import { CrudService } from '../crud.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  gform:FormGroup;
   respose:any;

   data=[100]; // contain all repositories objects

   selected=[]; // contain selected repositories objects

  constructor(private fb:FormBuilder ,private crud:CrudService) { } //inject service and formcontrol



// FOR SEND USERNAME TO THE SERVICE
  onsubmit(){
    console.log(this.gform.value); // for check value of username in console
  return this.crud.insertData(this.gform).subscribe(form =>{
     return form;
  })



  /// FOR SELECT REPOSITORY FROM ALL REPOSITORIES ---------------------/////////////
   }
   onSelect(res){
    for(let i=0; i<=100; i++){
      this.selected[i]=res;
    }
   }


  ngOnInit() {
    // FUNCTION FOR CAPTURING DETAILS OF A REACTIVE FORM
    this.gform =this.fb.group({
      camp:""
    })
// END //////////////////////.......................

////----- FOR GETTING FROM SERVICE ----------------------
    this.crud.getdata()
     .subscribe(resp => {  
      var newdata = JSON.stringify(resp)
      this.data = JSON.parse(newdata)
      console.log(this.data);  // FOR CHECKING VALUES IN CHROME CONSOLE
    }) 
  }

}
