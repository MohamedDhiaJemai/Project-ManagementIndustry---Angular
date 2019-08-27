import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Accès Rapide',
    group: true,
  },
  {
    title: 'Suivi Des Travaux',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Etat d\'Avancement Global',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Les Retards Effectués',
    icon: 'grid-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Administration',
    group: true,
  },
  {
      title: 'Gestion Des Projets',
    icon: 'layout-outline',
    children: [
      {
        title: 'Liste des Projets',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Etat des Projets',
        link: '/pages/layout/list',
      },
      {
        title: 'Phase',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Etape',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Sous Etape',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Gestion Des Employés',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Staff',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Chef d\'équipes',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Ouvriers',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Project Manager',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'Gestion Des Dépendances',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Dépendances Logistiques',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Dépendances Materielles',
        link: '/pages/ui-features/icons',
      },
     // /* {
     //    title: 'Typography',
     //    link: '/pages/ui-features/typography',
     //  },
     //  {
     //    title: 'Animated Searches',
     //    link: '/pages/ui-features/search-fields',
     //  },*/
    ],
  },
  {
    title: 'Société Cliente',
    icon: 'browser-outline',
    children: [
      {
        title: 'Liste des sociétés',
        link: '/pages/tables/societe-cliente',
      },
      {
        title: 'Contrats',
        link: '/pages/charts/d3',
      },
      {
        title: 'Paiements',
        link: '/pages/charts/chartjs',
      },
    ],
  },
  {
    title: 'Commissions',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Appels d\'offres\n',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Les Commissions',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Rapports des Commissions',
        link: '/pages/extra-components/spinner',
      },
      // {
      //   title: 'Alert',
      //   link: '/pages/extra-components/alert',
      // },
      // {
      //   title: 'Calendar Kit',
      //   link: '/pages/extra-components/calendar-kit',
      // },
      // {
      //   title: 'Chat',
      //   link: '/pages/extra-components/chat',
      // },
    ],
  },
  {
    title: 'Statistiques',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Statistique Projets',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Statistique Paiements',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Statistique Dépendances',
        link: '/pages/modal-overlays/popover',
      },
      // {
      //   title: 'Toastr',
      //   link: '/pages/modal-overlays/toastr',
      // },
      // {
      //   title: 'Tooltip',
      //   link: '/pages/modal-overlays/tooltip',
      // },
    ],
  },

  {
    title: 'Documentation',
    icon: 'map-outline',
    children: [
      {
        title: 'Documentation Techniques',
        link: '/pages/tables/documentation-technique',
      },
    //   {
    //     title: 'Leaflet Maps',
    //     link: '/pages/maps/leaflet',
    //   },
    //   {
    //     title: 'Bubble Maps',
    //     link: '/pages/maps/bubble',
    //   },
    //   {
    //     title: 'Search Maps',
    //     link: '/pages/maps/searchmap',
    //   },
    ],
  },

  {
    title: 'Manipulation',
    icon: 'text-outline',
    children: [
      {
        title: 'Etat D\'Avancement',
        link: '/pages/tables/etat-avancement',
      },
      // {
      //   title: 'CKEditor',
      //   link: '/pages/editors/ckeditor',
      // },
    ],
  },
  // {
  //   title: 'Tables & Data',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/pages/tables/tree-grid',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  {
    title: 'Authentification',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
