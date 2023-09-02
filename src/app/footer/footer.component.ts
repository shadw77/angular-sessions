import { Component } from '@angular/core';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faContactCard } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  email = faEnvelope;
  contact = faContactCard;
  twitter = faTwitter;
  facebook = faFacebookF;
  linkedin = faLinkedin;
}
