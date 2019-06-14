import {Component, OnInit} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { UserService } from 'src/app/services/User/user.service';
import { User } from 'src/app/models/user';
import { ProjectService } from 'src/app/services/project/project.service';
import { Project } from 'src/app/models/project/project';



@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  selectedUser: User;
  users = []

  projects = []
  joinedProjects = []

  constructor(private userService: UserService, private projectService: ProjectService) { }

  async ngOnInit() {
    var uResult = await this.userService.getAll().toPromise() as any;
    console.log(uResult)
    for (let i = 0; i < uResult._embedded.results.length; i++) {
      var user = uResult._embedded.results[i] as User;
      this.users.push(user)
    }

    var pResult = await this.projectService.getAll().toPromise() as any;
    console.log(pResult)
    
    for (let i = 0; i < pResult._embedded.results.length; i++) {
      var project = pResult._embedded.results[i] as Project;
      console.log({project: project,enabled: true})
      this.projects.push({project: project,enabled: true})
    }

  }

  async changeCheckbox(user){
    this.selectedUser = user;
    var pResult = await this.projectService.getByUser(user).toPromise() as any;
    for (let i = 0; i < this.joinedProjects.length; i++) {
      const project = this.joinedProjects[i];
      this.projects.push(project)
    }
    console.log(pResult)
    this.joinedProjects = []
    for (let i = 0; i < pResult._embedded.results.length; i++) {
      var project = pResult._embedded.results[i] as Project;
      for (let j = 0; j < this.projects.length; j++) {
        const p = this.projects[j];
        
        if (p.project.id === project.id){
          this.projects.splice(j,1)
        }

      }
      this.joinedProjects.push({project: project,enabled: true})
    }
  }

  async drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (this.selectedUser) {
        var project = (event.previousContainer.data[event.previousIndex] as any).project
        var result = await this.projectService.join(project,this.selectedUser).toPromise() as any
        console.log(result)
        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
      } else {
        alert("No user selected")
      }
      
    }
  }

}
