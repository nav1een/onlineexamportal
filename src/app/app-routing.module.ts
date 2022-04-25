import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HhComponent } from './hh/hh.component';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  {path:'hh', component:HhComponent},
  {path:"welcome", component:WelcomeComponent},
  {path:'', redirectTo:'hh',pathMatch:"full"},
  {path:"question", component:QuestionComponent},
  {path:"thanks", component:ThanksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
