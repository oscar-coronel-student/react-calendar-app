

export const CalendarEvent = ({ event }) => {

    const { title, user } = event

    const { name } = user

    return <>
        <div>{ title }</div>
        <div className="calendar-name">
            <strong>- { name }</strong>
        </div>
    </>
}
