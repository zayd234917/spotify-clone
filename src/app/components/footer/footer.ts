import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit{
     playing : boolean = true;
     value! : string; 
     ngOnInit(){
      if(this.playing){
         this.value = "Stop"
      }else{
        this.value = "play"
      }
     }
}
