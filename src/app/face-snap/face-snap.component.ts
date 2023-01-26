import { Component , OnInit,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap-model';
import { FaceSnapsService } from '../service/face-snap.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  [x: string]: any;

  @Input() faceSnap!: FaceSnap;
  
buttonText!:string;
constructor(private faceSnapService: FaceSnapsService,
            private router: Router       
  )
{}



ngOnInit(){
  this.buttonText= 'Oh Snap!'
}
onSnap() {
  if (this.buttonText === 'Oh Snap!') {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'snap');
    this.buttonText = 'Oops, unSnap!';
  } else {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'unsnap');
    this.buttonText = 'Oh Snap!'
  }
}
onView (){
  this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}

}