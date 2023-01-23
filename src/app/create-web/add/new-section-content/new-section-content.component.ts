import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-new-section-content',
  templateUrl: './new-section-content.component.html',
  styleUrls: ['./new-section-content.component.scss']
})
export class NewSectionContentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewSectionContentComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  addSection(section: string) {
    this.dialogRef.close(section);
  }
}
