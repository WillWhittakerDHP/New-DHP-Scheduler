// ** Demo Components Imports
import Scheduler from 'src/views/pages/wizard-examples/scheduler'

// ** Custom Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const WizardExamples = () => {
    return (
        <DatePickerWrapper>
            <Scheduler />
        </DatePickerWrapper>
    )
}

export default WizardExamples
