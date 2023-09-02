import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  desc: string =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit tempore totam eveniet voluptates ipsa deleniti dolores voluptatibus neque explicabo molestiae atque excepturi doloremque placeat, similique inciduntrerum, qui amet velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus harum, fuga sapiente aut, exercitationem, perferendis dolor nobis earum dignissimos enim alias libero fugiat similique repellat exsit. Mollitia, earum vel?';
  focus: Array<string> = [
    'UI/UX Deign',
    'Responsive Design',
    'Web Deign',
    'Mobile App Deign',
  ];
  skills: Array<any> = [
    { topic: 'HTML', percent: 97 },
    { topic: 'CSS', percent: 98 },
    { topic: 'JavaScript', percent: 80 },
    { topic: 'React', percent: 20 },
    { topic: 'Photoshop', percent: 100 },
    { topic: 'Adobe XD', percent: 60 },
    { topic: 'Node js', percent: 70 },
    { topic: 'WordPress', percent: 20 },
  ];
}
