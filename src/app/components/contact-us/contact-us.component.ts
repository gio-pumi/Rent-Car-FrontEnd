import { BranchesService } from './../../services/Branches.Service';
import { Component, OnInit } from '@angular/core';
import { Branch } from 'src/app/models/branch';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  public branches: Branch[];
  public location1: string = "";

  constructor(private branchesService: BranchesService) { }

  ngOnInit(): void {

    this.branchesService.getBranch()
      .subscribe(b => {
        this.branches = b
      }),
      err => {
        alert(err.message);
      },
      () => console.log("Done.")
  }
}
