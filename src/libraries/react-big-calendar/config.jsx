import { momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

export const localizer = momentLocalizer(moment)

export const lang = {
    en: null,
    'en-GB': null,
    es: {
        week: 'Semana',
        work_week: 'Semana de trabajo',
        day: 'Día',
        month: 'Mes',
        previous: 'Atrás',
        next: 'Después',
        today: 'Hoy',
        agenda: 'Agenda',
        allDay: 'Todo el día',
        date: 'Fecha',
        time: 'Tiempo',
        event: 'Evento',

        showMore: (total) => `+${total} más`,
    },
    fr: {
        week: 'La semaine',
        work_week: 'Semaine de travail',
        day: 'Jour',
        month: 'Mois',
        previous: 'Antérieur',
        next: 'Prochain',
        today: `Aujourd'hui`,
        agenda: 'Ordre du jour',

        showMore: (total) => `+${total} plus`,
    },
    'ar-AE': {
        week: 'أسبوع',
        work_week: 'أسبوع العمل',
        day: 'يوم',
        month: 'شهر',
        previous: 'سابق',
        next: 'التالي',
        today: 'اليوم',
        agenda: 'جدول أعمال',

        showMore: (total) => `+${total} إضافي`,
    },
}