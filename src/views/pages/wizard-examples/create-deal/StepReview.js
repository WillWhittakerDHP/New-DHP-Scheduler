// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table'
import Switch from '@mui/material/Switch'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

const ReviewComplete = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={6} xl={7}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h4' sx={{ mb: 4 }}>
              Almost done! 🚀
            </Typography>
            <Typography sx={{ mb: 1, color: 'text.secondary' }}>
              Confirm your deal details information and submit to create it.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer>
              <Table>
                <TableBody
                  sx={{
                    '& .MuiTableCell-root': {
                      borderBottom: 0,
                      verticalAlign: 'top',
                      '&:last-of-type': { px: '0 !important' },
                      '&:first-of-type': { pl: '0 !important' },
                      py: theme => `${theme.spacing(0.75)} !important`
                    }
                  }}
                >
                  <TableRow>
                    <TableCell>
                      <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary' }}>
                        Service Type
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ color: 'text.secondary' }}>Walk & Talk</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary' }}>
                        Additional Service
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ color: 'text.secondary' }}>Radon Testing, Blue Tape</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary' }}>
                        Dwelling Type
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ color: 'text.secondary' }}>Condo</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary' }}>
                        Address
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ color: 'text.secondary' }}>1209 13th St. NW #602, Washington DC, 20005</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography noWrap sx={{ fontWeight: 500, color: 'text.secondary' }}>
                        Square Footage
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{ color: 'text.secondary' }}>1000sqft</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ReviewComplete
