import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

//segnaliamo che alla path "", quindi nella landing, ci sara' il componente AppComponent (non e' necessario per il funzionamento, e' solo un esempio :D)
const routes: Routes = [
  {
    component: AppComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
