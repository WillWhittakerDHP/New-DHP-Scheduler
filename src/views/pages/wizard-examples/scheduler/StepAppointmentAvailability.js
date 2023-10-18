// ** React Imports
import {useState} from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

// ** Custom Components Imports
import DatePicker from "react-datepicker";

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const StepAppointmentAvailability = props => {
    // ** State
    const [startTimeType, setStartTimeType] = useState('inspector')

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
                <Grid item xs={12} md={9}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'end'
                    }}>
                        <Typography variant='body2' sx={{mr: 3}}>
                            Show start times for:
                        </Typography>
                        <Button variant={startTimeType === 'inspector' ? 'contained' : 'outlined'}
                                color={startTimeType === 'inspector' ? 'primary' : 'warning'} size='small' onClick={handleInspectorClick}>
                            Inspector
                        </Button>
                        <Button variant={startTimeType !== 'inspector' ? 'contained' : 'outlined'}
                                color={startTimeType === 'inspector' ? 'primary' : 'warning'} size='small' sx={{ ml: 1 }} onClick={handleClientClick}>
                            Client
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default StepAppointmentAvailability
