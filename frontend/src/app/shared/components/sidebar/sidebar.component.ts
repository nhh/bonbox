import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {

  items = [
    {
      title: 'Dashboard',
      icon: 'keypad-outline',
      link: ['/'],
    },
    {
      title: 'Buchungen',
      icon: 'checkmark-square-outline',
      link: ['accounting'],
    },
    {
      title: 'Kunden',
      icon: 'person-outline',
      link: [],
    },
    {
      title: 'Produkte',
      icon: 'shopping-bag-outline',
      link: [],
    },
    {
      title: 'Kalendar',
      icon: 'keypad-outline',
      link: ['/'],
    },
    {
      title: 'Einstellungen',
      icon: 'settings-2-outline',
      link: [],
    },
    {
      title: 'Sperren',
      icon: 'unlock-outline',
      link: [],
    },
  ];

  constructor() { }

  ngOnInit() {

  }

}
