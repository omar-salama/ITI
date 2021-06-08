import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { TypingComponent } from './Components/typing/typing.component';
// import { ValidateComponent } from './Components/validate/validate.component';
import { RegisterComponent } from './Components/register/register.component';
// import { DisplayComponent } from './Components/display/display.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { UsersComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RestyleDirective } from './Directives/restyle.directive';
import { ToLowerPipe } from './Pipes/to-lower.pipe';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    // TypingComponent,
    // ValidateComponent,
    RegisterComponent,
    // DisplayComponent,
    UsersComponent,
    UserDetailsComponent,
    RestyleDirective,
    ToLowerPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
