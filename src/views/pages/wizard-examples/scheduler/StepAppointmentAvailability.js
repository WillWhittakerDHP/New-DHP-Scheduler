// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'

// ** Custom Components Imports
import DatePicker from "react-datepicker";

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from '@mui/material/IconButton';
import Icon from "../../../../@core/components/icon";

import parse from 'date-fns/parse';

const StepAppointmentAvailability = props => {

    const {
        appointment,
        appointment: {
            additionalPresentationTime,
            day,
            inspectorTimeSlot,
            clientTimeSlot,
            minimizeInspectionTime,
            selectedTimeSlotPair,
            timeSlots
        }
    } = props;

    const [ startTimeType, setStartTimeType ] = useState('inspector');

    const getTimeSlots = startTimeType => {
        if (startTimeType === 'inspector') {
            return getInspectorTimes();
        } else {
            return getClientTimes();
        }
    }

    const getInspectorTimes = () => {
        return timeSlots.map(({ inspectorSlot }) => inspectorSlot.startLabel);
    }

    const getClientTimes = () => {
        return timeSlots.map(({ clientSlot }) => clientSlot.startLabel);
    }

    const handleInspectorClick = () => {
        setStartTimeType('inspector')
    }

    const handleClientClick = () => {
        setStartTimeType('client')
    }

    const handleTimeSlotClick = (slot, startTimeType) => {
        if (startTimeType === 'inspector') {
            appointment.setTimeSlot({ inspectorStart: slot });
        } else {
            appointment.setTimeSlot({ clientStart: slot });
        }
    }

    const handleDateChange = date => {
        appointment.setDay(date);
    }

    const handleMinimizeInspectorTimeToggle = () => {
        appointment.setMinimizeInspectionTime(!minimizeInspectionTime);
    }

    const handleAdditionalClientTimeToggle = () => {
        appointment.setAdditionalPresentationTime(!additionalPresentationTime);
    }

    const renderTimeSlots = () => {
        const selectedTimeSlot = startTimeType === 'inspector' ? inspectorTimeSlot : clientTimeSlot;

        return getTimeSlots(startTimeType).map(slot => (slot ?
                <Button
                    color={startTimeType === 'inspector' ? 'primary' : 'warning'}
                    variant={selectedTimeSlot === slot ? 'contained' : 'outlined'} size='small'
                    onClick={() => handleTimeSlotClick(slot, startTimeType)}>
                    {slot}
                </Button> : <div>&nbsp;</div>
        ))
    }

    const renderTimeBars = () => {
        if (!selectedTimeSlotPair) {
            return null;
        }

        const { inspectorSlot, clientSlot } = selectedTimeSlotPair;

        return (
            <Box sx={{
                display: 'flex',
                alignItems: 'flex-end',
                flexDirection: 'column',
                marginBottom: '30px',
                rowGap: '5px',
                padding: '0 30px'
            }}>
                <Button sx={{width: '100%', justifyContent: 'right'}} variant='contained'
                        onClick={handleInspectorClick}>
                    Inspector: {inspectorSlot.startLabel} → {inspectorSlot.endLabel}
                </Button>
                <Button sx={{width: '250px', justifyContent: 'right'}} color='warning' variant='contained'
                        onClick={handleClientClick}>
                    Client: {clientSlot.startLabel} → {clientSlot.endLabel}
                </Button>
            </Box>
        )
    }

    const renderTimeSelection = () => {
        if (!day) {
            return (
                <Grid item xs={12} md={9}>
                    <Box sx={{
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        Select a time for your appointment
                    </Box>
                </Grid>
            )
        }

        return (
            <Grid item xs={12} md={9}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'end',
                    flexWrap: 'wrap'
                }}>
                    <Typography variant='body2' sx={{mr: 3}}>
                        Show start times for:
                    </Typography>
                    <Button variant={startTimeType === 'inspector' ? 'contained' : 'outlined'}
                            color={startTimeType === 'inspector' ? 'primary' : 'warning'} size='small'
                            onClick={handleInspectorClick}>
                        Inspector
                    </Button>
                    <Button variant={startTimeType !== 'inspector' ? 'contained' : 'outlined'}
                            color={startTimeType === 'inspector' ? 'primary' : 'warning'} size='small' sx={{ml: 1}}
                            onClick={handleClientClick}>
                        Client
                    </Button>
                </Box>
                <Box sx={{
                    padding: '30px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridTemplateRows: 'repeat(7, 1fr)',
                    gridColumnGap: '10px',
                    gridRowGap: '10px',
                    gridAutoFlow: 'column'
                }}>
                    {renderTimeSlots()}
                </Box>
                {renderTimeBars()}
                <Box sx={{
                    padding: '0 30px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <FormControlLabel control={<Checkbox
                            checked={minimizeInspectionTime}
                            onChange={handleMinimizeInspectorTimeToggle}
                            sx={{padding: '3px'}} defaultChecked/>}
                                          label='Minimize inspector time in property'/>
                        <Tooltip arrow placement='right'
                                 title='Your inspector accesses the property early to examine the property and test the equipment before the client presentation. The report will be written AFTER the client presentation'>
                            <IconButton sx={{padding: '3px'}} aria-label='capture screenshot' color='primary'>
                                <Icon icon='ph:info-light'/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <FormControlLabel control={<Checkbox
                            checked={additionalPresentationTime}
                            onChange={handleAdditionalClientTimeToggle}
                            sx={{padding: '3px'}} defaultChecked/>}
                                          label='Additional client presentation time'/>
                        <Tooltip arrow
                                 placement='right'
                                 title='If client would like to spend additional time on the property with the inspector, time will be extended on site to accommodate. Additional costs apply'>
                            <IconButton sx={{padding: '3px'}} aria-label='capture screenshot' color='primary'>
                                <Icon color='primary' icon='ph:info-light'/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </Grid>
        )
    }

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} md={12}>
                    <Typography variant='h4'>
                        Appointment Availability
                    </Typography>
                    <Typography variant='body2'>
                        Select a time that works for everybody
                    </Typography>
                </Grid>
                <Grid item xs={12} md={3}>
                    <DatePickerWrapper
                        sx={{'& .react-datepicker': {boxShadow: 'none !important', border: 'none !important'}}}>
                        <DatePicker
                            inline
                            selected={day}
                            startDate={day}
                            onChange={handleDateChange}/>
                    </DatePickerWrapper>
                </Grid>
                {renderTimeSelection()}
            </Grid>
        </>
    )
}

export default StepAppointmentAvailability
