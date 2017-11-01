import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './services/auth.service';
import { CommentService } from './services/comment.service';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';

import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { CommentComponent } from './comment/comment.component';
import { ContainerComponent } from './comment/container/container.component';
import { UserViewComponent } from './user/view/view.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { SignupComponent } from './signup/signup.component';
import { CreateComponent } from './update/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UpdateComponent,
    CommentComponent,
    ContainerComponent,
    UserViewComponent,
    UserEditComponent,
    SignupComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    // RouterModule.forRoot([
    //   {
    //     path: 'home',
    //     component: HomeComponent
    //   }
    // ])
  ],
  providers: [
    AuthGuard,
    AuthService,
    CommentService,
    UserService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    router
      .events
      .forEach((event) => {
        console.log(event);
        if (event instanceof NavigationStart) {
          console.log('NAV START')
        }
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
      });
  }
}
