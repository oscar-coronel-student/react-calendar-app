import moment from 'moment'

export const events = [
    {
        id: 0,
        title: 'Dia de graduación',
        allDay: true,
        start: moment().toDate(),
        end: moment().toDate(),
        user: {
            _id: 1,
            name: 'Andrea Arteaga',
        },
    },
    {
        id: 1,
        title: 'Salida al supermaxi',
        start: moment().toDate(),
        end: moment().add(2, 'hours').toDate(),
        user: {
            _id: 2,
            name: 'Elena Ámbar',
        },
    },
]