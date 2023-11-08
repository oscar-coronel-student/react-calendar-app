import { useState } from 'react'
import { Calendar } from 'react-big-calendar'

import { localizer, lang } from '../../libraries/react-big-calendar/config'
import { events } from '../../libraries/react-big-calendar/events'

import 'moment/locale/es.js'
import { CalendarEvent } from './CalendarEvent'
import { CalendarModal } from './CalendarModal'


const getLastView = () => {
    return localStorage.getItem('CalendarView') || 'month'
}

export const CalendarPage = () => {

    const [lastView, setLastView] = useState( getLastView() )

    const onDoubleClick = (event) => {
        console.log('onDoubleClick')
        console.log(event)
    }

    const onSelect = (event) => {
        console.log('onSelect')
        console.log(event)
    }

    const onViewChange = (event) => {
        console.log('onViewChange')
        
        localStorage.setItem('CalendarView', event)
        setLastView( event ) 
    }

    return <>
        <div className="container-fluid calendar-div">
            <Calendar
                localizer={ localizer }
                events={ events } // Para la agenda
                startAccessor="start"
                endAccessor="end"
                messages={ lang['es'] }
                culture='es'
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={ onDoubleClick }
                onSelectEvent={ onSelect }
                onView={ onViewChange }
                view={ lastView }
            />

            <CalendarModal />
        </div>
    </>
}