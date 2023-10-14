// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import MenuItem from '@mui/material/MenuItem'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CustomTextField from 'src/@core/components/mui/text-field'
import CustomRadioIcons from 'src/@core/components/custom-radio/icons'
import InputAdornment from "@mui/material/InputAdornment";

const data = [
  {
    value: 'condo',
    isSelected: true,
    title: (
      <Typography sx={{ mb: 1 }} variant='h6'>
        Condo / Co-Op
      </Typography>
    )
  },
  {
    value: 'townhouse',
    title: (
      <Typography sx={{ mb: 1 }} variant='h6'>
        Townhouse
      </Typography>
    )
  },
  {
    value: 'single_family',
    title: (
        <Typography sx={{ mb: 1 }} variant='h6'>
          Single Family
        </Typography>
    )
  },
  {
    value: 'multi_family',
    title: (
        <Typography sx={{ mb: 1 }} variant='h6'>
          Multi Family
        </Typography>
    )
  }
]

const StepPropertyDetails = () => {
  const initialIconSelected = data.filter(item => item.isSelected)[data.filter(item => item.isSelected).length - 1]
    .value

  // ** State
  const [selectedRadio, setSelectedRadio] = useState(initialIconSelected)

  // ** Hook
  const theme = useTheme()

  const icons = [
    {
      icon: 'tabler:building',
      iconProps: { fontSize: '2.5rem', style: { marginBottom: 8 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'fluent:building-townhouse-20-regular',
      iconProps: { fontSize: '2.5rem', style: { marginBottom: 8 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'tabler:home',
      iconProps: { fontSize: '2.5rem', style: { marginBottom: 8 }, color: theme.palette.text.secondary }
    },
    {
      icon: 'bi:houses',
      iconProps: { fontSize: '2.5rem', style: { marginBottom: 8 }, color: theme.palette.text.secondary }
    }
  ]

  const handleRadioChange = prop => {
    if (typeof prop === 'string') {
      setSelectedRadio(prop)
    } else {
      setSelectedRadio(prop.target.value)
    }
  }

  return (
    <>
      <Grid container sx={{ mb: 6 }} spacing={4}>
        {data.map((item, index) => (
          <CustomRadioIcons
            key={index}
            data={data[index]}
            icon={icons[index].icon}
            selected={selectedRadio}
            name='custom-radios-property'
            gridProps={{ sm: 3, xs: 12 }}
            handleChange={handleRadioChange}
            iconProps={icons[index].iconProps}
          />
        ))}
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <Typography variant='h5'>
            Location
          </Typography>
        </Grid>
        <Grid item xs={12} md={9}>
          <CustomTextField
            fullWidth
            label='Address'
            placeholder='123 Pleasant St.'
            aria-describedby='validation-zip-code'
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CustomTextField fullWidth label='Unit' placeholder='10' />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField fullWidth label='City' placeholder='Los Angeles' />
        </Grid>
        <Grid item xs={12} md={3}>
          <CustomTextField select fullWidth defaultValue='VA' label='State'>
            <MenuItem value='FL'>Florida</MenuItem>
            <MenuItem value='VA'>Virginia</MenuItem>
          </CustomTextField>
        </Grid>
        <Grid item xs={12} md={3}>
          <CustomTextField type='number' fullWidth label='Zip Code' defaultValue='US' />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12}>
          <Typography variant='h5' sx={{ mt: 5 }}>
            Details
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField
              fullWidth
              type='number'
              placeholder='800'
              label='Size'
              InputProps={{
                endAdornment: <InputAdornment position='end'>sq-ft</InputAdornment>
              }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default StepPropertyDetails
