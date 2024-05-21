import { Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

export const routes: Routes = [
    //{'path': '', 'title':'Dashboard', component: DashComponent},
    {'path': 'about', 'title':'About', component: AboutComponent},
    {'path': 'team', 'title':'Team', component: TeamComponent},
    {'path': 'login', 'title':'Login', component: LoginComponent},
    {'path': '', redirectTo: 'tutorials', pathMatch: 'full' },
    {'path': 'tutorials', component: TutorialsListComponent },
    {'path': 'tutorials/:id', component: TutorialDetailsComponent },
    {'path': 'add', component: AddTutorialComponent },
    {'path': '**', 'title':'PageNotFound', component: PageNotFoundComponent}
];
