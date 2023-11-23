import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ChooseChairComponent } from './pages/choose-chair/choose-chair.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { TravelFindComponent } from './pages/travel-find/travel-find.component';
import { ModifyInfoComponent } from './administration/modify-info/modify-info.component';
import { AddInformationComponent } from './administration/add-information/add-information.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'choose-chair',
        component: ChooseChairComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    },
    {
        path: 'destination',
        component: DestinationComponent
    },
    {
        path: 'travel-find',
        component: TravelFindComponent
    },
    {
        path: 'modify-info',
        component: ModifyInfoComponent
    },
    {
        path: 'add-info',
        component: AddInformationComponent
    }
];
