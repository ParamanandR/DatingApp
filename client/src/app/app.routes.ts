import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { Component } from '@angular/core';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { authGuard } from './_guards/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {
        path:'',
        runGuardsAndResolvers: 'always',
        canActivate:[authGuard],
        children:[
            {path:'members', component:  MemberListComponent},
            {path:'member/:id',component: MemberDetailComponent},
            {path:'lists', component : ListsComponent},
            {path:'messages', component : MessagesComponent},
        ]
    },
    {path: "errors" , component: TestErrorsComponent},
    {path:'**', component: HomeComponent, pathMatch:'full'},
];
