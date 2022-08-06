import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'event 1', date: '2022-08-17' },
      { title: 'event 2', date: '2022-08-22' }
    ]
  };

  handleDateClick(arg: any) {
    alert('date click!' + arg.dateStr)
  }

}
