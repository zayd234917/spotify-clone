import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer{
     playing : boolean = false;
     value : string = "Start"; 
     
     
     toogleValue(){
      if(this.playing){
        this.value = "Stop";
        this.playing = !this.playing;
      }else{
        this.value = "Start"
        this.playing = !this.playing;
      }
     }
}
