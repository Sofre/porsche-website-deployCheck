import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { VARIANTS, Variant } from '../shared/variants';

@Component({
  selector: 'app-models',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  selectedModelFilter: string = 'All';
  selectedFuelFilter: string = 'All';
  selectedGearFilter: string = 'All';

  models: string[] = ['All', '911', '718', 'Taycan', 'Panamera', 'Macan', 'Cayenne'];
  fuelTypes: string[] = ['All', 'Petrol', 'Electric', 'Hybrid'];
  gearTypes: string[] = ['All', 'Automatic', 'Manual'];

  variants: Variant[] = VARIANTS;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['model']) {
        this.selectedModelFilter = params['model'];
      }
    });
  }

  setFilter(model: string): void {
    this.selectedModelFilter = model;
  }

  setFuelFilter(fuel: string): void {
    this.selectedFuelFilter = fuel;
  }

    setGearFilter(gear: string): void {
    this.selectedGearFilter = gear;
  }

  filteredVariants(): Variant[] {
    return this.variants.filter(v => {
      const modelMatch =
        this.selectedModelFilter === 'All' || v.model === this.selectedModelFilter;

      const fuelMatch =
        this.selectedFuelFilter === 'All' || v.fuel === this.selectedFuelFilter;

       const gearMatch =
        this.selectedGearFilter === 'All' || v.gear === this.selectedGearFilter;  

      return modelMatch && fuelMatch && gearMatch;
    });
  }
}
