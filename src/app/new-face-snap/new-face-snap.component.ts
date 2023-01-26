import { Observable,  } from "rxjs";
import { FaceSnap } from "../core/models/face-snap-model";
import { FormBuilder,FormGroup } from "@angular/forms";
import { map } from "rxjs";
import { Component } from "@angular/core";
import { Validators } from "@angular/forms";
import { FaceSnapsService } from "../core/service/face-snap.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent {
snapForm!:FormGroup;
faceSnapPreview$!: Observable<FaceSnap>;
urlRegex!:RegExp;

constructor(private formBuilder:FormBuilder,
            private faceSnapsService: FaceSnapsService,
            private router : Router){ }
  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      imageUrl: [null, [Validators.required,Validators.pattern(this.urlRegex)]],
      location: [null]
  });
  this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
    map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        snaps: 0,
        id: 0
    }))
);
}
onSubmitForm() {
  this.faceSnapsService.addFaceSnap(this.snapForm.value);
  this.router.navigateByUrl('/facesnaps');
}
}

