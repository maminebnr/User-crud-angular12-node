import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './components/users-list/books-list.component';
import { AddUserComponent } from './components/add-user/add-book.component';
import { UserDetailComponent } from './components/user-detail/book-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-user' },
  { path: 'users-list', component: UsersListComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'edit-user/:id', component: UserDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
