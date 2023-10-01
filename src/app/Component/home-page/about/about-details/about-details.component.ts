import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/Models/about';
import { Workes } from 'src/app/Models/workes';
import { AboutService } from 'src/app/Services/About/about.service';
import { ProjectsService } from 'src/app/Services/Projects/projects.service';

@Component({
  selector: 'app-about-details',
  templateUrl: './about-details.component.html',
  styleUrls: ['./about-details.component.css']
})
export class AboutDetailsComponent implements OnInit {

  projectID: any;
  work: About = {
    id: 0,
    description: '',
    image: '',
    name: '',
    video:''
  }

  constructor(private services: AboutService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    const friendlyName = this.route.snapshot.paramMap.get('friendlyName');
    const encodedId = this.route.snapshot.paramMap.get('id');

     const id = parseInt(atob(encodedId!), 10);

    this.route.paramMap.subscribe((params) => {
      this.projectID = id;
      if (this.projectID != 0) {
        this.services.getProject(this.projectID).subscribe({
          next: (value) => {
            this.work = value;
          },
        });
      }
    });
  }

}
