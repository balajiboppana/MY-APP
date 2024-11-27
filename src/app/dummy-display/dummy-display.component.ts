import { Component, ElementRef } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog} from '@angular/material/dialog';
import { DummyDialogDisplayComponent } from '../dummy-dialog-display/dummy-dialog-display.component';

@Component({
  selector: 'app-dummy-display',
  templateUrl: './dummy-display.component.html',
  styleUrls: ['./dummy-display.component.css']
})
export class DummyDisplayComponent {
  hidden = false;
  panelOpenState = false;
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor(private _bottomSheet: MatBottomSheet,public dialog: MatDialog ) {}

  openBottomSheet(): void {
    this._bottomSheet.open(DummyDisplayComponent);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DummyDialogDisplayComponent, {
      data: {name:'balaji', phone:7684265757},
      disableClose:true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
  });
  
}
}
