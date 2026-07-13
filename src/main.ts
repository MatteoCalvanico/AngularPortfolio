import { bootstrapApplication } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/components/main/app.component';

register();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
