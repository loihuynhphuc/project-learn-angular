import { Component, OnInit } from '@angular/core';
import { BaseApiService } from '../service/base-api.service';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public displayedColumns: string[] = ['id','body', 'title', 'userId'];
  public dataSource: any;
  constructor(private baseApiService: BaseApiService) {}
  ngOnInit(): void {
    const param = {
      _page :2 ,
      _limit :20};
    this.baseApiService.getData('posts', param)
    .pipe(

      filter((item) => {
        console.log('item: ',item);
        return true;
      })
      ).subscribe({
      next: (res) => {
        console.log('res: ',res);
        this.dataSource = res;
      },
      error: (err) => {
        console.log('err: ', err);
      },
      complete: () => {
        console.log('complete');
      }
    })
  }

}
