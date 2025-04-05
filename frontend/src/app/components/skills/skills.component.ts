import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skills {
  id: number,
  titulo: string,
  icon: string,
  items: Items[]
};

interface Items {
  id: number,
  skill: string,
  progress: number,
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  host: {
    '[attr.id]': '"skills"',
    'class': 'd-block p-4 m-4',
    '[style.height]': '"75vh"',
  }
})

export class SkillsComponent {

  array: Skills[] = [
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
          skill: "SQL & NoSQL",
          progress: 75,
        },
        {
          id: 4,
          skill: "Bash Script",
          progress: 50,
        },
        {
          id: 5,
          skill: "Python + Flask",
          progress: 50,
        },
        {
          id: 6,
          skill: "Java",
          progress: 25,
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
          skill: "React + NextJs",
          progress: 75,
        },
        {
          id: 2,
          skill: "Angular + Ionic",
          progress: 75,
        },
        {
          id: 3,
          skill: "TypeScript",
          progress: 75,
        },
        {
          id: 4,
          skill: "HTML5 + CSS3",
          progress: 75,
        },
        {
          id: 5,
          skill: "Bootstrap & Tailwind",
          progress: 75,
        },
        {
          id: 6,
          skill: "JavaScript",
          progress: 75,
        },
      ]
    },
    {
      id: 3,
      titulo: "Operations",
      icon: "bi bi-hdd-network",
      items: [
        {
          id: 1,
          skill: "Git",
          progress: 75,
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
          progress: 50,
        },
        {
          id: 6,
          skill: "ETL",
          progress: 50,
        },
      ]
    },
  ]

  onClick(id: string) {
    for (let i = 1; i <= this.array.length; i++) {
      if (!id.includes(`${i}`)) {
        document.getElementById(`collapse-${i}`)?.classList.remove('show');
      }
    }
  }

}
