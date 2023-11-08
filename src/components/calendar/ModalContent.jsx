import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave } from "@fortawesome/free-solid-svg-icons"

import DateTimePicker from 'react-datetime-picker'
import moment from "moment"

const oStartDate = moment().minutes(0).seconds(0).add(1, 'hours')
const oEndDate = oStartDate.clone().add(1,'hours')

export const ModalContent = () => {

    const [startDate, onStartDateChange] = useState( oStartDate.toDate() )
    const [endDate, onEndDateChange] = useState( oEndDate.toDate() )


    return <>
        <h1> Nuevo evento </h1>
        <hr />
        <form className="container">

            <div className="form-group">
                <label>Fecha y hora inicio</label>
                <DateTimePicker 
                    className="form-control"
                    onChange={ onStartDateChange } 
                    value={ startDate } 
                />
            </div>

            <div className="form-group">
                <label>Fecha y hora fin</label>
                <DateTimePicker 
                    className="form-control"
                    onChange={ onEndDateChange } 
                    minDate={ startDate }
                    value={ endDate } 
                />
            </div>

            <hr />
            <div className="form-group">
                <label>Titulo y notas</label>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Título del evento"
                    name="title"
                    autoComplete="off"
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group">
                <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary w-100 btn-sm"
            >
                <FontAwesomeIcon icon={ faSave } />
                <span> Guardar</span>
            </button>

        </form>
    </>
}