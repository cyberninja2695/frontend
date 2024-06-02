import { Routes } from '@angular/router';
import { DashComponent } from './components/dash/dash.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { FoodComponent } from './components/food/food.component';

export const routes: Routes = [
    //Cyberninja
    {'path': 'dash', 'title':'Dashboard', component: DashComponent},
    {'path': 'about', 'title':'About', component: AboutComponent},
    {'path': 'team', 'title':'Team', component: TeamComponent},
    {'path': 'login', 'title':'Login', component: LoginComponent},
    {'path': 'food', component: FoodComponent },
    //Bezkoder
    {'path': '', redirectTo: 'tutorials', pathMatch: 'full' },
    {'path': 'tutorials', component: TutorialsListComponent },
    {'path': 'tutorials/:id', component: TutorialDetailsComponent },
    {'path': 'add', component: AddTutorialComponent },
    {'path': '**', 'title':'PageNotFound', component: PageNotFoundComponent}
];
