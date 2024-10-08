import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  array = [
    {
      id: 1,
      titulo: "Backend",
      icon: "bi bi-braces",
      items: [
        {
          id: 1,
          skill: "NodeJs + Express",
          progress: 75,
        },
        {
          id: 2,
          skill: "ORM Sequelize",
          progress: 75,
        },
        {
          id: 3,
          skill: "SQL",
          progress: 50,
        },
        {
          id: 4,
          skill: "Bash Script",
          progress: 25,
        },
        {
          id: 5,
          skill: "Java",
          progress: 25,
        },
        {
          id: 6,
          skill: "Python + Flask",
          progress: 75,
        },
      ]
    },
    {
      id: 2,
      titulo: "Frontend",
      icon: "bi bi-code-slash",
      items: [
        {
          id: 1,
          skill: "HTML5 + CCS3",
          progress: 50,
        },
        {
          id: 2,
          skill: "Bootstrap",
          progress: 50,
        },
        {
          id: 3,
          skill: "JavaScript",
          progress: 75,
        },
        {
          id: 4,
          skill: "TypeScript",
          progress: 50,
        },
        {
          id: 5,
          skill: "Angular",
          progress: 75,
        },
        {
          id: 6,
          skill: "React + NextJs",
          progress: 25,
        },
      ]
    },
    {
      id: 3,
      titulo: "DevOps",
      icon: "bi bi-hdd-rack",
      items: [
        {
          id: 1,
          skill: "Git",
          progress: 50,
        },
        {
          id: 2,
          skill: "Docker",
          progress: 50,
        },
        {
          id: 3,
          skill: "Nginx",
          progress: 50,
        },
        {
          id: 4,
          skill: "PM2",
          progress: 50,
        },
        {
          id: 5,
          skill: "Setup Env. Linux",
          progress: 25,
        },
        {
          id: 6,
          skill: "ETL",
          progress: 25,
        },
      ]
    },
  ]

}
