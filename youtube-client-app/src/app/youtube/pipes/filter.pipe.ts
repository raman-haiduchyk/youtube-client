import { Pipe, PipeTransform } from '@angular/core';
import { IResponseItem } from '@core/models/response-item.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(items: IResponseItem[], dateFilter: boolean, viewFilter: boolean, wordFilter: string): IResponseItem[] {
    if (items != null) {

      if (dateFilter != null) {
        items.sort((a, b) => {
          let dateA: number = (new Date(a.snippet.publishedAt)).getTime();
          let dateB: number = (new Date(b.snippet.publishedAt)).getTime();
          return dateFilter ? dateB - dateA : dateA - dateB;
        });

      } else if (viewFilter != null) {
        items.sort((a, b) => {
          let viewCountA: number = Number(a.statistics.viewCount);
          let viewCountB: number = Number(b.statistics.viewCount);
          return viewFilter ? viewCountA - viewCountB : viewCountB - viewCountA;
        });
        return items;

      } else if (wordFilter != null) {
        return items.filter((item) => item.snippet.title.toLowerCase().indexOf(wordFilter.toLowerCase()) !== -1);
      }

    }
    return items;
  }

}
