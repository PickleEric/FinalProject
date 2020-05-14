import Router from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import CalendarView from '@/components/CalendarView'
import CalendarEvent from '@/components/CalendarEvent'
export default new Router ({
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/calendarview',
            component: CalendarView
        },
        {
            path: '/calendarevent',
            component: CalendarEvent
        }
    ]
  })