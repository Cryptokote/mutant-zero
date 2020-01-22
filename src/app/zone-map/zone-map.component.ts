import { Component, OnInit } from '@angular/core';
import {Sector, ZoneMapCoordinates} from '../dataFiles/data.types';
import {ZONE_MAP_DATA} from '../dataFiles/projects.data';

@Component({
  selector: 'app-zone-map',
  templateUrl: './zone-map.component.html',
  styleUrls: ['./zone-map.component.scss']
})
export class ZoneMapComponent implements OnInit {
  public rowsCoordsArray = Array(21).fill(0).map((x, i) => String.fromCharCode(97 + i));
  public colsCoordsArray = Array(30).fill(0).map((x, i) => i + 1);
  public mapData = Array(21 * 30).fill({});
  private exploredSectors = ZONE_MAP_DATA;
  constructor() { }

  ngOnInit() {
    this.fillMap();
  }

  fillMap() {
    this.exploredSectors.forEach(exploredSector => {
      const index = this.convertCoordinatesToIndex(exploredSector.col, exploredSector.row);
      console.log(index);
      this.mapData[index] = exploredSector;
    });
  }

  convertCoordinatesToIndex(col: number, row: string): number {
    console.log(col, row, row.toLowerCase().charCodeAt(0))
    return 30 * (row.toLowerCase().charCodeAt(0) - 97) + col;
  }

  convertIndexToCoordinates(index: number): ZoneMapCoordinates {
    return {row: String.fromCharCode((index / 30) + 97), col: (index % 30) + 1};
  }
}
