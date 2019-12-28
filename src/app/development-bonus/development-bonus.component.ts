import {Component, Input, OnInit} from '@angular/core';
import {Devs} from '../dataFiles/data.types';

const ICONS_PATH = {
  technology: './assets/icon_8.svg',
  culture: './assets/icon_105.svg',
  warfare: './assets/icon_62.svg',
  food_supply: './assets/icon_60.svg'
};

@Component({
  selector: 'app-development-bonus',
  templateUrl: './development-bonus.component.html',
  styleUrls: ['./development-bonus.component.scss']
})
export class DevelopmentBonusComponent implements OnInit {
  @Input('development') development: Devs;
  public devKeys: Array<string>;
  public icons = ICONS_PATH;
  constructor() { }

  ngOnInit() {
    this.devKeys = this.development ? Object.keys(this.development) : [];
  }
}

// tech -- mapMarkers 8,9
// culture -- map markers 44, 45?, 105, 106
// warfare -- mapmarkers 198, 199, invPAgeIcons 62
// food -- pageIcons 60,
