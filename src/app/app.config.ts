// app.config.ts
import { provideRouter } from '@angular/router';
import { AppRoutes } from './app.routes'; // Import the routes
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';



export const appConfig = {
  providers: [
    provideRouter(AppRoutes), // This should connect your routes to the router
    HomeComponent,
    ModelsComponent,
    
  ]
};
