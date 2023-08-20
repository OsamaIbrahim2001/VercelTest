import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Workes } from 'src/app/Models/workes';
import { ProjectsService } from 'src/app/Services/Projects/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {

  projectID: any;
  work: Workes = {
    id: 0,
    coverImage: '',
    description: '',
    images: [],
    imagesFile: [],
    name: ''
  }

  constructor(private services: ProjectsService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.projectID = params.get('id');
      if (this.projectID != 0) {
        this.services.getOneWork(this.projectID).subscribe({
          next: (value) => {
            this.work = value;
            this.work.coverImage=this.work.images[0];
          },
        });
      }
    });
  }

  changeImage(index:number){
this.work.coverImage=this.work.images[index];
  }
}
