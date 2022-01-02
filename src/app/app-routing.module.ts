import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { routes } from './components/shared/constants/routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
