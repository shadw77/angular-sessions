import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css'],
})
export class PortfolioItemComponent {
  @Input() item: any;
  @Input() i: any;

}
