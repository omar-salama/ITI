import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './Components/new-user/new-user.component';
import { UpdateUserComponent } from './Components/update-user/update-user.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
