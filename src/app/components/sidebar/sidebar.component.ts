import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from '../../../providers/auth/auth.service';

export interface sideList {
  name: string;
  rout: string;
  icon?: any;
  path?: any;
  path2?: any;
  path3?: any;
  path4?: any;
  path5?: any;
  path6?: any;
  path7?: any;
  path8?: any;
  svg?: any;
  action?: string;
  style?: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  sideList: sideList[] = [
    {
      name: 'Accueil',
      rout: '/dashboard',
      svg: '0 1 511 511.999',
      path: 'm498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0'
    },
    {
      name: 'Utilisateurs',
      rout: '/users',
      icon: 'fas fa-th-large',
      svg: '-42 0 512 512.001',
      path: 'm210.351562 246.632812c33.882813 0 63.21875-12.152343 87.195313-36.128906 23.96875-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.128906 87.195312 23.980469 23.96875 53.316406 36.125 87.191406 36.125zm-65.972656-189.292968c18.394532-18.394532 39.972656-27.335938 65.972656-27.335938 25.996094 0 47.578126 8.941406 65.976563 27.335938 18.394531 18.398437 27.339844 39.980468 27.339844 65.972656 0 26-8.945313 47.578125-27.339844 65.976562-18.398437 18.398438-39.980469 27.339844-65.976563 27.339844-25.992187 0-47.570312-8.945312-65.972656-27.339844-18.398437-18.394531-27.34375-39.976562-27.34375-65.976562 0-25.992188 8.945313-47.574219 27.34375-65.972656zm0 0',
      path2: 'm426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.3125-10.339844-7.808594-20.550781-13.375-30.335938-5.769532-10.15625-12.550782-19-20.160157-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.042969 5.339844-10.96875 0-22.085937-1.796876-33.042968-5.339844-11.210938-3.621094-20.300782-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.753906-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.609375 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.0625 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.777344-1.023438 19.953125-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.4375 23.730469 65.066406 23.730469h246.53125c26.621094 0 48.511719-7.984375 65.0625-23.730469 16.757813-15.945312 25.253906-37.589843 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm-44.90625 72.828125c-10.933594 10.40625-25.449218 15.464844-44.378906 15.464844h-246.527344c-18.933594 0-33.449218-5.058594-44.378906-15.460938-10.722656-10.207031-15.933594-24.140625-15.933594-42.585937 0-9.59375.316406-19.066407.949219-28.160157.617187-8.921874 1.878906-18.722656 3.75-29.136718 1.847656-10.285156 4.199219-19.9375 6.996094-28.675782 2.683593-8.378906 6.34375-16.675781 10.882812-24.667968 4.332031-7.617188 9.316407-14.152344 14.816407-19.417969 5.144531-4.925781 11.628906-8.957031 19.269531-11.980469 7.066406-2.796875 15.007812-4.328125 23.628906-4.558594 1.050781.558594 2.921875 1.625 5.953125 3.601563 6.167969 4.019531 13.277344 8.605469 21.136719 13.625 8.859375 5.648437 20.273437 10.75 33.910156 15.152344 13.941406 4.507812 28.160156 6.796875 42.273437 6.796875 14.113282 0 28.335938-2.289063 42.269532-6.792969 13.648437-4.410156 25.058594-9.507813 33.929687-15.164063 8.042969-5.140624 14.953125-9.59375 21.121094-13.617187 3.03125-1.972656 4.902344-3.042969 5.953125-3.601563 8.625.230469 16.566406 1.761719 23.636719 4.558594 7.636719 3.023438 14.121093 7.058594 19.265625 11.980469 5.5 5.261719 10.484375 11.796875 14.816406 19.421875 4.542969 7.988281 8.207031 16.289062 10.886719 24.660156 2.800781 8.75 5.15625 18.398438 7 28.675782 1.867187 10.433593 3.132812 20.238281 3.75 29.144531v.007812c.636719 9.058594.957031 18.527344.960937 28.148438-.003906 18.449219-5.214844 32.378906-15.9375 42.582031zm0 0'
    },
    {
      name: 'Articles',
      rout: 'articles',
      svg: '0 0 24 24',
      path: 'm7.323 10.5h-2.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.5c.414 0 .75.336.75.75s-.336.75-.75.75z',
      path2: 'm19.323 10.5h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75z',
      path3: 'm7.323 14.5h-2.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.5c.414 0 .75.336.75.75s-.336.75-.75.75z',
      path4: 'm19.323 14.5h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75z',
      path5: 'm7.323 18.5h-2.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h2.5c.414 0 .75.336.75.75s-.336.75-.75.75z',
      path6: 'm19.323 18.5h-7.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h7.5c.414 0 .75.336.75.75s-.336.75-.75.75z',
      path7: 'm21.25 23h-18.5c-1.517 0-2.75-1.233-2.75-2.75v-16.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v16.5c0 1.517-1.233 2.75-2.75 2.75zm-18.5-20.5c-.689 0-1.25.561-1.25 1.25v16.5c0 .689.561 1.25 1.25 1.25h18.5c.689 0 1.25-.561 1.25-1.25v-16.5c0-.689-.561-1.25-1.25-1.25z',
      path8: 'm23.25 6h-22.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h22.5c.414 0 .75.336.75.75s-.336.75-.75.75z'
    },
    {
      name: 'Événements',
      rout: '/events',
      icon: 'fas fa-calendar-week',
      svg: '0 0 433.63 433.63',
      path: 'm388.75 47.038c-0.886-0.036-1.773-0.042-2.66-0.017h-33.437v-28.735c1e-3 -11.494-10.971-18.286-22.465-18.286h-30.824c-11.494 0-19.853 6.792-19.853 18.286v28.734h-125.39v-28.734c0-11.494-8.359-18.286-19.853-18.286h-30.825c-11.493 0-22.465 6.792-22.465 18.286v28.734h-33.436c-21.344-0.595-39.129 16.226-39.724 37.569-0.025 0.886-0.019 1.774 0.017 2.66v301.98c0 22.988 16.718 44.408 39.706 44.408h338.55c22.988 0 39.706-21.42 39.706-44.408v-301.98c0.874-21.334-15.713-39.337-37.047-40.211zm-89.386-26.14h32.392v57.469h-32.392v-57.469zm-195.92 0h29.78v57.469h-29.78v-57.469zm301.45 368.33c0 11.494-7.314 23.51-18.808 23.51h-338.55c-11.494 0-18.808-12.016-18.808-23.51v-222.04h376.16v222.04zm0-301.98v59.037h-376.16v-59.037c-0.885-9.77 6.318-18.408 16.088-19.293 0.904-0.082 1.814-0.094 2.72-0.037h33.437v11.494c0 11.494 10.971 19.853 22.465 19.853h30.825c10.672 0.293 19.56-8.122 19.853-18.794 0.01-0.353 0.01-0.706 0-1.059v-11.495h125.39v11.494c-0.293 10.672 8.122 19.56 18.794 19.853 0.353 0.01 0.706 0.01 1.059 0h30.825c11.494 0 22.465-8.359 22.465-19.853v-11.494h33.437c9.791-0.617 18.228 6.82 18.845 16.611 0.057 0.906 0.045 1.816-0.037 2.72z',
      path2: 'm158.82 309.81-9.404 52.245c-0.372 2.241-4e-3 4.543 1.049 6.556 2.675 5.113 8.989 7.09 14.102 4.415l47.02-24.555 47.02 24.555 4.702 1.045c2.267 0.04 4.48-0.698 6.269-2.09 3.123-2.281 4.73-6.099 4.18-9.927l-9.404-52.245 38.139-36.571c2.729-2.949 3.719-7.109 2.612-10.971-1.407-3.57-4.577-6.145-8.359-6.792l-52.245-7.837-23.51-47.543c-1.025-2.116-2.733-3.825-4.849-4.849-5.194-2.515-11.443-0.344-13.959 4.849l-23.51 47.543-52.245 7.837c-3.782 0.646-6.952 3.222-8.359 6.792-1.107 3.862-0.116 8.022 2.612 10.971l38.139 36.572zm28.735-42.318c3.281-0.491 6.061-2.675 7.314-5.747l16.718-33.437 16.718 33.437c1.254 3.072 4.033 5.256 7.314 5.747l37.094 5.224-26.645 25.6c-2.482 2.457-3.646 5.949-3.135 9.404l6.269 37.094-32.914-17.763-4.702-1.045-4.702 1.045-32.914 17.763 6.269-37.094c0.512-3.455-0.653-6.947-3.135-9.404l-26.645-25.6 37.096-5.224z'
    },
    {
      name: 'Transactions',
      rout: 'transactions',
      svg: '0 0 512 512',
      path: 'm456 80h-400c-30.878 0-56 25.122-56 56v240c0 30.878 25.122 56 56 56h400c30.878 0 56-25.122 56-56v-240c0-30.878-25.122-56-56-56zm-400 32h400c13.233 0 24 10.767 24 24v32h-448v-32c0-13.233 10.767-24 24-24zm400 288h-400c-13.233 0-24-10.767-24-24v-176h448v176c0 13.233-10.767 24-24 24z',
      path2: 'm112 352h-16c-8.836 0-16-7.164-16-16v-16c0-8.836 7.164-16 16-16h16c8.836 0 16 7.164 16 16v16c0 8.836-7.164 16-16 16z'
    }
  ];

  logout() {
    this.auth.logout();
  }
}
