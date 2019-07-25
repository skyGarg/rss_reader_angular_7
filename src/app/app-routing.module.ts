import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChannelsComponent } from './channels/channels.component';
import { HomeComponent } from './home/home.component';

const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'channels',
    component: ChannelsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
