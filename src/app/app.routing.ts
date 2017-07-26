import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [
  // TODO: I'll need at least 2 pages, login and a home



  { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);
