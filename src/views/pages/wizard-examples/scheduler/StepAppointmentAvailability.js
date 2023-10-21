// ** React Imports
import {useState} from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

// ** Custom Components Imports
import DatePicker from "react-datepicker";

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from '@mui/material/IconButton';
import Icon from "../../../../@core/components/icon";

const StepAppointmentAvailability = props => {
    // ** State
    const [startTimeType, setStartTimeType] = useState('inspector')

    const createTimeSlots = (startTime = 700, endTime = 2100, increments = 30) => {
        const slotsTotal = (endTime - startTime) * (60 / increments);
        return Array.from({length: slotsTotal}, (_, i) => startTime + i * increments);
    }

    const timeSlots = {
        inspector: ['7:00am', '7:30am', '8:00am', '8:30am', '', '', '', '', '11:00am', '11:30am', '12:00am',
            '12:30am', '01:00pm', '01:30pm', '02:00pm', '02:30pm', '', '', '', '', '05:00pm',
            '', '', '', '', '07:30pm', '08:00pm', '08:30pm'],
        client: ['7:00pm', '7:30pm', '8:00pm', '', '', '', '', '10:30pm', '11:00pm', '11:30pm', '12:00pm',
            '12:30pm', '01:00pm', '01:30pm', '02:00pm', '02:30pm', '03:00pm', '03:30pm', '04:00pm', '04:30pm', '05:00pm',
            '05:30pm', '06:00pm', '06:30pm', '07:00pm', '', '', '08:30pm']
    }

    const handleInspectorClick = () => {
        setStartTimeType('inspector')
    }

    const handleClientClick = () => {
        setStartTimeType('client')
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
                        <DatePicker inline onChange={date => {
                        }}/>
                    </DatePickerWrapper>
                </Grid>
                <Grid item xs={12} md={6}>
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
                        {
                            timeSlots[startTimeType].map(slot => (slot ?
                                    <Button color={startTimeType === 'inspector' ? 'primary' : 'warning'}
                                            variant='outlined' size='small'>
                                        {slot}
                                    </Button> : <div>&nbsp;</div>
                            ))
                        }
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        flexDirection: 'column',
                        marginBottom: '30px',
                        rowGap: '5px',
                        padding: '0 30px' }}>
                        <Button sx={{ width: '100%', justifyContent: 'right' }} variant='contained' onClick={handleInspectorClick}>
                            Inspector: 9:30am → 11:30am
                        </Button>
                        <Button sx={{ width: '250px', justifyContent: 'right' }} color='warning' variant='contained' onClick={handleClientClick}>
                            Client: 10:30am → 11:30am 
                        </Button>
                    </Box>
                    <Box sx={{
                        padding: '0 30px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <FormControlLabel control={<Checkbox sx={{padding: '3px'}} defaultChecked/>}
                                              label='Minimize inspector time in property'/>
                            <Tooltip arrow placement='right' title='Your inspector accesses the property early to examine the property and test the equipment before the client presentation. The report will be written AFTER the client presentation'>
                                <IconButton sx={{ padding: '3px' }} aria-label='capture screenshot' color='primary'>
                                    <Icon icon='ph:info-light'/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <FormControlLabel control={<Checkbox sx={{padding: '3px'}} defaultChecked/>}
                                              label='Additional client presentation time'/>
                            <Tooltip arrow
                                     placement='right'
                                     title='If client would like to spend additional time on the property with the inspector, time will be extended on site to accommodate. Additional costs apply'>
                                <IconButton sx={{ padding: '3px' }} aria-label='capture screenshot' color='primary'>
                                    <Icon color='primary' icon='ph:info-light'/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default StepAppointmentAvailability
