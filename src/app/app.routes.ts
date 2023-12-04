import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ChooseChairComponent } from './pages/choose-chair/choose-chair.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { TravelFindComponent } from './pages/travel-find/travel-find.component';
import { ItineraryMaintenanceComponent } from './administratio/itinerary-maintenance/itinerary-maintenance.component';
import { TicketSalesComponent } from './administratio/ticket-sales/ticket-sales.component';
import { BusesComponent } from './administratio/buses/buses.component';
import { ServicesTravelsComponent } from './administratio/services-travels/services-travels.component';
import { InfoToPayComponent } from './administratio/info-to-pay/info-to-pay.component';
import { TicketsInfoComponent } from './administratio/tickets-info/tickets-info.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { ItinerarioComponent } from './pages/itinerario/itinerario.component';

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
        path: 'reservation',
        component: ReservationComponent
    },
    {
        path: 'itinerario',
        component: ItinerarioComponent
    },
    {
        path: 'administration/itinerary-maintenance',
        component: ItineraryMaintenanceComponent
    },
    {
        path: 'administration/ticket-sales',
        component: TicketSalesComponent
    },
    {
        path: 'administration/buses',
        component: BusesComponent
    },
    {
        path: 'administration/services-travel',
        component: ServicesTravelsComponent
    },
    {
        path: 'administration/info-to-pay',
        component: InfoToPayComponent
    },
    {
        path: 'administration/tickets-info',
        component: TicketsInfoComponent
    }
];
