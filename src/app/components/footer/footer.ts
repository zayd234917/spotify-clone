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
     image : string = "../../../assets/start2.png"
     
     
     toogleValue(){
      if(this.playing){
        this.image = "../../../assets/stop.jpg";
        this.playing = !this.playing;
      }else{
        this.image = "../../../assets/start2.png"
        this.playing = !this.playing;
      }
     }
}
