import './App.css';
import './common/css/Common.css';
import './AppResponsive.css';
// Admin
import AdminDashboard from './pages/admin/Dashboard';
import AddCategory from './pages/admin/category/AddCategory';
import AllCategory from './pages/admin/category/AllCategory';
import AllCustomers from './pages/admin/customers/AllCustomers';
import AddEventtype from './pages/admin/eventtype/Add';
import AllEventtype from './pages/admin/eventtype/List';
import AdminManageTicket from './pages/admin/event/Manageticket';
import AdminTicketattendee from './pages/admin/event/ticketattendee';
import ActiveOrganizer from './pages/admin/organizer/ActiveOrganizer';
import PendingOrganizer from './pages/admin/organizer/PendingOrganizer';
import Supportlist from './pages/admin/support/Supportlist';
import AdminTicketView from './pages/admin/support/SupportReply';
import Contactlist from './pages/admin/contact/Contactlist';
import AllEventlist from './pages/admin/event/AllEventlist';
import Membership from './pages/admin/membership/Membership';
import Addcoupon from './pages/admin/membership/Addcoupon';
import AdminCustomerProfile from './pages/admin/CustomerProfile';
import AdminOrganizerProfile from './pages/admin/OrganizerProfile';
import AdminPayoutrequest from './pages/admin/payout/list';
import AdminLayout from './layout/admin/Layout'
// Customer
import CustomerDashboard from './pages/customer/Dashboard';
import CustomerSupportlist from './pages/customer/support/Supportlist';
import CustomerTicketView from './pages/customer/support/SupportReply';
import CustomerOrderlist from './pages/customer/events/Orderlist';
import FollowingList from './pages/customer/FollowingList';
import OrganizerEvents from './pages/customer/events/Organizerevents';
import SavedeventsList from './pages/customer/SavedeventsList';
import CustomerProfile from './pages/customer/CustomerProfile';
import Myrewards from './pages/customer/Myrewards';
import CustomerLayout from './layout/customer/Layout'
// Organizer
import Dashboard from './pages/organizer/Dashboard';
import Analytics from './pages/organizer/analytics';
import OrganizerSupportlist from './pages/organizer/support/Supportlist';
import EventType from './pages/organizer/Event/EventCreateForm';
import EditEvent from './pages/organizer/Event/EditEvent';
import EventView from './pages/organizer/Event/EventView';
import EventList from './pages/organizer/Event/List';
import Ticketlist from './pages/organizer/Event/ticketlist';
import Ticketattendee from './pages/organizer/Event/ticketattendee';
import TicketView from './pages/organizer/support/SupportReply';
import ManageTicket from './pages/organizer/Event/Manageticket';
import TicketSoldlist from './pages/organizer/ticketsold/List';
import PayoutList from './pages/organizer/payout/list';
import Tixmescanner from './pages/organizer/Tixmescanner';
import Tixmescannerpage from './pages/organizer/Tixmescannerpage';
import Qrvalidation from './pages/organizer/Qrvalidation';
import OrganizerProfile from './pages/organizer/OrganizerProfile';
import OrganizerLayout from './layout/organizer/Layout'
// auth
import CustomerLogin from './pages/website/auth/CustomerLogin';
import CustomerFpassword from './pages/website/auth/Customerfpassword';
import OrganizerFpassword from './pages/website/auth/Organizerfpassword';
import CustomerSignup from './pages/website/auth/CustomerSignup';
import OrganizerLogin from './pages/website/auth/OrganizerLogin';
import OrganizerSignup from './pages/website/auth/OrganizerSignup';
import AdminLogin from './pages/website/auth/AdminLogin';
import LoginSignup from './pages/website/auth/LoginSignup';
// website

// import Home from './pages/website/Home';
import Home from "./components/home";
import Faqs from "./components/faqs";
import Contact from "./components/contact";
import About from "./components/about";
import Policy from "./components/policy";

import WebsiteLayout from './layout/website/Layout'
import XYZ from './pages/website/XYZ';
import Scaner from './pages/website/Scaner';
import Event from './pages/website/Event';
// import Aboutus from './pages/website/aboutus';
import Terms from './pages/website/Terms';
// import Privacy from './pages/website/Privacy';
// import Faq from './pages/website/Faq';
// import Contact from './pages/website/Contact';
import Organizers from './pages/website/Organizers';
import OrganizerDetails from './pages/website/OrganizerDetails';
import Raiseticket from './pages/website/Raiseticket';
import CartDetails from './pages/website/CartDetails';
import CartDataFill from './pages/website/CartDataFill';
import OrderSuccessful from './pages/website/OrderSuccessful';
import OrderFailed from './pages/website/OrderFailed';
import Events from './pages/website/Events';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { app_url, organizer_url, admin_url, customer_url } from './common/Helpers';
import { Toaster } from 'react-hot-toast'
function App() {
  return (
    <>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          {/* auth */}
          <Route path={app_url + 'auth/login-signup'} element={<LoginSignup/>} />
          <Route path={app_url + 'auth/customer/signup'} element={<CustomerSignup title={'Tixme'} />} />
          <Route path={app_url + 'auth/customer/login'} element={<CustomerLogin title={'Tixme'} />} />
          <Route path={app_url + 'auth/customer/forgot-password'} element={<CustomerFpassword title={'Tixme'} />} />
          <Route path={app_url + 'auth/organizer/login'} element={<OrganizerLogin title={'Tixme'} />} />
          <Route path={app_url + 'auth/organizer/signup'} element={<OrganizerSignup title={'Tixme'} />} />
          <Route path={app_url + 'auth/organizer/forgot-password'} element={<OrganizerFpassword title={'Tixme'} />} />
          <Route path={app_url + 'auth/admin/login'} element={<AdminLogin title={'Tixme'} />} />
          {/* website */}
          {/* <Route path={app_url} element={<WebsiteLayout> <Home title={'Tixme'} /> </WebsiteLayout>} /> */}
          {/* <Route path={app_url + 'aboutus'} element={<WebsiteLayout> <Aboutus title={'About Us'} /> </WebsiteLayout>} /> */}
          {/* <Route path={app_url + 'privacy-policy'} element={<WebsiteLayout> <Privacy title={'Privacy policy'} /> </WebsiteLayout>} /> */}
          {/* <Route path={app_url + 'faq'} element={<WebsiteLayout> <Faq title={'FAQ'} /> </WebsiteLayout>} /> */}
          {/* <Route path={app_url + 'contact'} element={<WebsiteLayout> <Contact title={'Contact Us'} /> </WebsiteLayout>} /> */}
          <Route path={app_url} element={<Home />} />
          <Route path={app_url + 'test'} element={<XYZ title={'Tixme'} />} />
          <Route path={`${app_url}event/:id/:name`} element={<Event title={'Tixme'} />} />
          <Route path={app_url + 'terms-and-conditions'} element={<WebsiteLayout> <Terms title={'Terms & conditions'} /> </WebsiteLayout>} />
          <Route path={app_url + 'aboutus'} element={<About />} />
          <Route path={app_url + 'privacy-policy'} element={<Policy />} />
          <Route path={app_url + 'faq'} element={<Faqs />} />
          <Route path={app_url + 'contact'} element={<Contact />} />
          <Route path={app_url + 'organizers'} element={<WebsiteLayout> <Organizers title={'Organizers'} /> </WebsiteLayout>} />
          <Route path={app_url + 'raise-ticket'} element={<WebsiteLayout> <Raiseticket title={'Raise Ticket'} /> </WebsiteLayout>} />
          <Route path={app_url + 'events'} element={<Events title={'Events'} />} />
          <Route path={`${app_url}organizer-profile/:id/:name`} element={<WebsiteLayout> <OrganizerDetails title={'Organizer Profile'} /> </WebsiteLayout>} />
          <Route path={app_url + 'cart-details'} element={<CartDetails title={'Your Cart'} />} />
          <Route path={`${app_url}cart-details-fill/:orderid`} element={<CartDataFill title={'Your Cart'} />} />
          <Route path={app_url + 'order-successful-page'} element={<OrderSuccessful title={'Payment status'} />} />
          <Route path={app_url + 'order-failed-page'} element={<OrderFailed title={'Payment status'} />} />
          <Route path={app_url + 'scanner'} element={<Scaner title={'Payment status'} />} />
          {/* Customer */}
          <Route path={customer_url + 'dashboard'} element={<CustomerLayout title={'Dashboard'}> <CustomerDashboard title={'Dashboard'} /> </CustomerLayout>} />
          <Route path={customer_url + 'support-tickets'} element={<CustomerLayout> <CustomerSupportlist title={'Support Tickets'} /> </CustomerLayout>} />
          <Route path={`${customer_url}support-tickets/:eventid`} element={<CustomerLayout title={'Mange Tickets'}> <CustomerSupportlist title={'Mange Tickets'} /> </CustomerLayout>} />
          <Route path={`${customer_url}view-support-ticket/:id`} element={<CustomerLayout title={'Mange Tickets'}> <CustomerTicketView title={'Mange Tickets'} /> </CustomerLayout>} />
          <Route path={customer_url + 'my-order-list'} element={<CustomerLayout title={'My Tickets'}> <CustomerOrderlist title={'All Order List'} /> </CustomerLayout>} />
          <Route path={customer_url + 'my-profile'} element={<CustomerLayout title={'My profile'}> <CustomerProfile /> </CustomerLayout>} />
          <Route path={customer_url + 'following'} element={<CustomerLayout title={'My following'}> <FollowingList title={'My following'} /> </CustomerLayout>} />
          <Route path={`${customer_url}organizer-events/:id`} element={<CustomerLayout title={'Organizer Events'}> <OrganizerEvents /> </CustomerLayout>} />
          <Route path={customer_url + 'savedevents'} element={<CustomerLayout title={'My saved event'}> <SavedeventsList title={'My saved event'} /> </CustomerLayout>} />
          <Route path={customer_url + 'my-rewards'} element={<CustomerLayout title={'My Rewards'}> <Myrewards title={'My Rewards'} /> </CustomerLayout>} />
          {/* Organizer */}
          <Route path={organizer_url + 'dashboard'} element={<OrganizerLayout title={'Organizer Dashboard'}> <Dashboard /> </OrganizerLayout>} />
          <Route path={organizer_url + 'event/add-event'} element={<OrganizerLayout> <EventType title={'Create new event'} /> </OrganizerLayout>} />
          <Route path={`${organizer_url}event/edit-event/:id/:name`} element={<OrganizerLayout title={'Edit event'}> <EditEvent /> </OrganizerLayout>} />
          <Route path={`${organizer_url}event/view-event/:id/:name`} element={<OrganizerLayout> <EventView title={'Event details'} /> </OrganizerLayout>} />
          <Route path={`${organizer_url}event/manage-ticket/:id/:name`} element={<OrganizerLayout title={'Mange Tickets'}> <ManageTicket title={'Mange Tickets'} /> </OrganizerLayout>} />
          <Route path={`${organizer_url}event/mange-attendee/:id/:name`} element={<OrganizerLayout title={'Mange Attendee'}> <Ticketattendee title={'Mange Attendee'} /> </OrganizerLayout>} />
          <Route path={`${organizer_url}event/mange-attendee/:id/:name/:ticket_name`} element={<OrganizerLayout title={'Mange Attendee'}> <Ticketattendee title={'Mange Attendee'} /> </OrganizerLayout>} />
          <Route path={organizer_url + 'event/all-event-list'} element={<OrganizerLayout title={'Event Management'}> <EventList title={'All event list'} /> </OrganizerLayout>} />
          <Route path={organizer_url + 'support-tickets'} element={<OrganizerLayout title={'Mange Tickets'}> <OrganizerSupportlist title={'Mange Tickets'} /> </OrganizerLayout>} />
          <Route path={`${organizer_url}support-tickets/:eventid`} element={<OrganizerLayout title={'Mange Tickets'}> <OrganizerSupportlist title={'Mange Tickets'} /> </OrganizerLayout>} />
          <Route path={`${organizer_url}view-support-ticket/:id`} element={<OrganizerLayout title={'Mange Tickets'}> <TicketView title={'Mange Tickets'} /> </OrganizerLayout>} />
          <Route path={organizer_url + 'ticket-sold-list'} element={<OrganizerLayout> <TicketSoldlist title={'Tickets sold list'} /> </OrganizerLayout>} />
          <Route path={organizer_url + 'tickets-list'} element={<OrganizerLayout> <Ticketlist title={'Tickets list'} /> </OrganizerLayout>} />
          <Route path={organizer_url + 'payout-request'} element={<OrganizerLayout title={'Payout list'}> <PayoutList /> </OrganizerLayout>} />
          <Route path={organizer_url + 'tixme-scanner'} element={<OrganizerLayout title={'Tixme scanner'}> <Tixmescanner /> </OrganizerLayout>} />
          <Route path={organizer_url + 'tixme-scanner-page'} element={<OrganizerLayout title={'Tixme scanner'}> <Tixmescannerpage /> </OrganizerLayout>} />
          <Route path={organizer_url + 'tixme-validate'} element={<OrganizerLayout> <Qrvalidation title={'QR validate'} /> </OrganizerLayout>} />
          <Route path={organizer_url + 'analytics'} element={<OrganizerLayout> <Analytics title={'Analytics'} /> </OrganizerLayout>} />
          <Route path={organizer_url + 'my-profile'} element={<OrganizerLayout title={'My profile'}> <OrganizerProfile /> </OrganizerLayout>} />
          {/* Admin */}
          <Route path={admin_url + 'dashboard'} element={<AdminLayout title={'Admin Dashboard'}> <AdminDashboard /> </AdminLayout>} />
          <Route path={admin_url + 'add-category'} element={<AdminLayout title={'Add Category'}> <AddCategory /> </AdminLayout>} />
          <Route path={admin_url + 'all-category'} element={<AdminLayout title={'All Category'}> <AllCategory /> </AdminLayout>} />
          <Route path={admin_url + 'add-event-type'} element={<AdminLayout title={'Add Event Type'}> <AddEventtype /> </AdminLayout>} />
          <Route path={admin_url + 'all-event-type'} element={<AdminLayout title={'All Event Type'}> <AllEventtype /> </AdminLayout>} />
          <Route path={admin_url + 'all-events-list'} element={<AdminLayout title={'All Events'}> <AllEventlist/> </AdminLayout>} />
          <Route path={`${admin_url}event/manage-ticket/:id/:name`} element={<AdminLayout title={'Mange Tickets'}> <AdminManageTicket title={'Mange Tickets'} /> </AdminLayout>} />
          <Route path={`${admin_url}event/mange-attendee/:id/:name`} element={<AdminLayout title={'Mange Attendee'}> <AdminTicketattendee title={'Mange Attendee'} /> </AdminLayout>} />
          <Route path={`${admin_url}event/edit-event/:id/:name`} element={<AdminLayout title={'Edit event'}> <EditEvent /> </AdminLayout>} />
          <Route path={admin_url + 'all-customers'} element={<AdminLayout title={'All Customers'}> <AllCustomers /> </AdminLayout>} />
          <Route path={`${admin_url}customers/:id/:name`} element={<AdminLayout title={'Customers'}> <AllCustomers /> </AdminLayout>} />
          <Route path={`${admin_url}user-details/:id/:name`} element={<AdminLayout title={'Customers'}> <AdminCustomerProfile /> </AdminLayout>} />
          <Route path={`${admin_url}organizer-details/:id/:name`} element={<AdminLayout title={'Organizer'}> <AdminOrganizerProfile /> </AdminLayout>} />
          <Route path={`${admin_url}payout-request/:id/:name`} element={<AdminLayout title={'Payout request'}> <AdminPayoutrequest /> </AdminLayout>} />
          <Route path={admin_url + 'active-organizer'} element={<AdminLayout title={'Active Organizer'}> <ActiveOrganizer /> </AdminLayout>} />
          <Route path={admin_url + 'pending-organizer'} element={<AdminLayout title={'Pending Organizer'}> <PendingOrganizer /> </AdminLayout>} />
          <Route path={admin_url + 'support-tickets'} element={<AdminLayout title={'Manage Tickets'}> <Supportlist /> </AdminLayout>} />
          <Route path={admin_url + 'contact-us'} element={<AdminLayout title={'Contact us list'}> <Contactlist /> </AdminLayout>} />
          <Route path={admin_url + 'membership'} element={<AdminLayout title={'Membership'}> <Membership /> </AdminLayout>} />
          <Route path={`${admin_url}view-support-ticket/:id`} element={<AdminLayout title={'Mange Tickets'}> <AdminTicketView /> </AdminLayout>} />
          <Route path={`${admin_url}event/view-event/:id/:name`} element={<AdminLayout> <EventView title={'Event details'} /> </AdminLayout>} />
          <Route path={admin_url + 'addcoupon'} element={<AdminLayout title={'Add Coupon'}> <Addcoupon /> </AdminLayout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
