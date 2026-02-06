import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5 + CSS3', 'JavaScript', 'Angular', 'React', 'TypeScript', 'Bootstrap & Tailwind']
    },
    {
      title: 'Backend',
      skills: ['NodeJs + Express', 'SQL', 'NoSQL', 'Python + Flask', 'Java']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Docker', 'Nginx', 'PM2', 'Linux']
    }
  ];
}
