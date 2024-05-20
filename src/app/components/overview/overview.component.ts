import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { appoint } from 'src/app/appp';
import { HospitalService } from 'src/app/hospital.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  constructor(private _HospitalService:HospitalService){}
  selected!: Date | null;
  ngOnInit(): void {
    this.getAll()    
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin:10,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  data:appoint[]=[]
  getAll(){
    this._HospitalService.getData().subscribe({
      next:res=>{
        console.log(res[2].data);
        this.data=res[2].data
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
}
