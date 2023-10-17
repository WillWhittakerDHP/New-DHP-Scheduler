// ** React Imports
import {useState, forwardRef} from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Sections = {
    CLIENT: 'Client',
    CLIENT_2: 'Another Client',
    TRANSACTION_MANAGER: 'Transaction Manager',
    SELLER: 'Seller'
}

const CustomInput = forwardRef(({...props}, ref) => {
    // ** Props
    const {label, readOnly} = props

    return (
        <CustomTextField
            fullWidth
            {...props}
            inputRef={ref}
            label={label || ''}
            {...(readOnly && {inputProps: {readOnly: true}})}
        />
    )
})

const StepPersonalInformation = () => {
    // ** States
    const [hasClient, setHasClient] = useState(false)
    const [hasManager, setHasManager] = useState(false)
    const [hasSeller, setHasSeller] = useState(false)
    const [sections, setSections] = useState({
        [Sections.CLIENT_2]: false,
        [Sections.TRANSACTION_MANAGER]: false,
        [Sections.SELLER]: false,
    })

    const handleToggleSection = (state, section) => {
        setSections({
            ...sections,
            [section]: state
        })
    }

    const renderDeleteButton = section => (
        <IconButton color='inherit' aria-haspopup='true' aria-label='capture screenshot'
                    onClick={() => handleToggleSection(false, section)}>
            <Icon icon='tabler:trash'/>
        </IconButton>
    )

    const renderAddButton = section => (
        <Button disabled={sections[section]} size='small' sx={{mr: 2}} variant='outlined'
                onClick={() => handleToggleSection(true, section)}>Add {section}</Button>
    )

    const renderContactForms = (title, canDelete, shouldShow = true) => {
        if (!shouldShow) {
            return null;
        }

        return (
            <Grid container spacing={4} sx={{mt: 5}}>
                <Grid item xs={12} md={12}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Typography variant='h6'>
                            {`${title} Information`}
                        </Typography>
                        {canDelete && renderDeleteButton(title)}
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <CustomTextField
                        fullWidth
                        label='First Name'
                        placeholder='Joe'
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CustomTextField
                        fullWidth
                        label='Last Name'
                        placeholder='Smith'
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CustomTextField
                        fullWidth
                        type='email'
                        placeholder='joe.smith@xyz.com'
                        label='Email'
                    />
                </Grid>
            </Grid>
        )
    }

    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} md={12}>
                    <Typography variant='h4'>
                        Contact Information
                    </Typography>
                    <Typography variant='body2'>
                        Add contact info for all interested parties who will receive inspection correspondence
                    </Typography>
                </Grid>
            </Grid>
            {renderContactForms('Client', false)}
            {renderContactForms('Agent', false)}
            {sections[Sections.CLIENT_2] && renderContactForms(Sections.CLIENT_2, true)}
            {sections[Sections.TRANSACTION_MANAGER] && renderContactForms(Sections.TRANSACTION_MANAGER, true)}
            {sections[Sections.SELLER] && renderContactForms(Sections.SELLER, true)}
            <Grid container spacing={4} sx={{mt: 5}}>
                <Grid item xs={12} md={9}>
                    {renderAddButton(Sections.CLIENT_2)}
                    {renderAddButton(Sections.TRANSACTION_MANAGER)}
                    {renderAddButton(Sections.SELLER)}
                </Grid>
            </Grid>
        </>
    )
}

export default StepPersonalInformation
