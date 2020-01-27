import { Component, OnInit } from '@angular/core';
import {Sector, ZoneMapCoordinates} from '../dataFiles/data.types';
import {PLAYERS_LOCATION, ZONE_MAP_DATA} from '../dataFiles/projects.data';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-zone-map',
  templateUrl: './zone-map.component.html',
  styleUrls: ['./zone-map.component.scss']
})
export class ZoneMapComponent implements OnInit {
  public rowsCoordsArray = Array(21).fill(0).map((x, i) => String.fromCharCode(97 + i));
  public colsCoordsArray = Array(30).fill(0).map((x, i) => i + 1);
  public mapData: Array<Sector> = Array(21 * 30).fill({});
  public sectorForm;
  private exploredSectors = ZONE_MAP_DATA;
  private youAreHere = PLAYERS_LOCATION;
  constructor(private formBuilder: FormBuilder) {
    this.sectorForm = this.formBuilder.group({
      col: '',
      row: '',
      rotLvl: '',
      comment: ''
    });
  }

  ngOnInit() {
    this.fillMap();
  }

  fillMap() {
    this.exploredSectors.forEach(exploredSector => {
      const index = this.convertCoordinatesToIndex(exploredSector.col, exploredSector.row);
      this.mapData[index] = exploredSector;
      if (this.youAreHere.find(coord => coord.row === exploredSector.row && coord.col === exploredSector.col)) {
          this.mapData[index].youAreHere = true;
      }
    });
  }

  convertCoordinatesToIndex(col: number, row: string): number {
    return 30 * (row.toLowerCase().charCodeAt(0) - 97) + col;
  }

  convertIndexToCoordinates(index: number): ZoneMapCoordinates {
    return {row: String.fromCharCode((index / 30) + 97), col: (index % 30) + 1};
  }
}
