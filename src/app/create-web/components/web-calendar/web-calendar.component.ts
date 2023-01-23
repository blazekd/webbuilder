import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import localeCs from '@angular/common/locales/cs';
import { registerLocaleData } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarView, CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import { isSameMonth, isSameDay, addMinutes, startOfDay } from 'date-fns';
import { Subject } from 'rxjs';
import { RRule } from 'rrule';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';


const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
  green: {
    primary: 'rgba(20,100,20,0.9)',
    secondary: 'rgba(20,100,20,0.5)',
  },
};

registerLocaleData(localeCs);
@Component({
  selector: 'web-calendar',
  templateUrl: './web-calendar.component.html',
  styleUrls: ['./web-calendar.component.scss']
})
export class WebCalendarComponent implements OnInit {

  // @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  hourSegmentHeight: any = 5;

  // modalData: {
  //   action: string;
  //   event: CalendarEvent;
  // };

  rule = new RRule({
      freq: RRule.WEEKLY,
      interval: 1,
      byweekday: [RRule.MO, RRule.FR],
      dtstart: new Date(Date.UTC(2021, 1, 1, 10, 30)),
      until: new Date(Date.UTC(2021, 12, 31))
    })

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  eventsRaw: any;

  displayEvents: any = new Array<any>();;

  events: CalendarEvent[] = new Array<CalendarEvent>();;
    /*{
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions,
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions,
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      allDay: true,
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: addHours(new Date(), 2),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },*/


  activeDayIsOpen: boolean = true;

  // constructor(private modal: NgbModal, public event: EventService, public server: ServerService)
  // {
  //    this.event.updateJoinedEvents();
  //    this.event.joinedEvents$.subscribe(res => {
  //     this.eventsRaw = res;
  //     if(res != null)
  //     {
  //       this.convertToCalendarEvents(res);
  //       this.displayEvents = this.event.displayEvents(res);
  //     }
  //     console.log(this.displayEvents);
  //    });
  // }

  constructor()
  {

  }

  ngOnInit(): void
  {

  }


  convertToCalendarEvents(events: any)
  {
    this.events = new Array<CalendarEvent>();
    for(var event of events.content)
    {
       var cEvent =
       {
          start: new Date(event.startDate),
          end: new Date(event.endDate),
          title: event.parent.title,
          color: event.eventState === "ACCEPTED" ? colors.green : colors.yellow
       };
       this.events.push(cEvent);
    }
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    //this.modalData = { event, action };
    //this.modal.open(this.modalContent, { size: 'lg' });
     let eventIndex = this.events.indexOf(event);
    //  this.event.openEventDetail(this.displayEvents, this.displayEvents[eventIndex]);
  }

  addEvent(): void {
    for(var i = 0; i < this.rule.all().length; i++)
    {
      this.events = [
            ...this.events,
            {
              title: 'Cvičení s Evou',
              start:  addMinutes(startOfDay( this.rule.all()[i]), 600),
              end: addMinutes(startOfDay( this.rule.all()[i]), 690),
              color: colors.blue,
            },
          ];
    }

  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
