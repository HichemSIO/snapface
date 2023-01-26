import { Injectable } from '@angular/core';
import { FaceSnap } from 'src/app/core/models/face-snap-model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps:FaceSnap [] = [
    {
      id: 1,
      title: 'Luffy',
      description: 'Le roi des pirates ça sera moi !',
      imageUrl: 'https://anniversaire-celebrite.com/upload/250x333/monkey-d-luffy-250.jpg',
      createdDate: new Date(),
      snaps: 110,
      location: "quelque part dans l'ocean"
    },
    {
      id:2,
      title: 'Naruto',    
      description: 'je serai hokage',
      imageUrl: 'https://www.kanpai.fr/sites/default/files/styles/og/public/naruto-tag.jpg',
      createdDate: new Date(),
      snaps: 116,
      location: 'konoha'
    },
    {
      id:3,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 101
      },
      {
        id: 4,
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 110,
        location: 'Paris'
      },
      {
        id:7,
        title: 'Rock MountainThree',    
        description: 'Un endroit magnifique pour les randonnées.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        createdDate: new Date(),
        snaps: 6,
        location: 'la montagne'
      },
      {
        id:5,
        title: 'Un bon repas',
        description: 'Mmmh que c\'est bon !',
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date(),
        snaps: 101
        }
    ];
getAllFaceSnaps(): FaceSnap[ ]{
return this.faceSnaps;
}
getFaceSnapById(faceSnapId: number): FaceSnap {
  const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
  if (!faceSnap) {
      throw new Error('FaceSnap not found!');
  } else {
      return faceSnap;
  }
}

snapFaceSnapById(faceSnapId: number, snapType: 'snap'|'unsnap'): void {
  const faceSnap = this.getFaceSnapById(faceSnapId);
  snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

}
unsnapFaceSnapById(faceSnapId: number): void {
  const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnap.id);
  if (faceSnap) {
      faceSnap.snaps--;
  } else {
      throw new Error('FaceSnap not found!');
  }
}
addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
  const faceSnap: FaceSnap = {
      ...formValue,
      snaps: 0,
      createdDate: new Date(),
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
  };
  this.faceSnaps.push(faceSnap);
}
   }
      
 