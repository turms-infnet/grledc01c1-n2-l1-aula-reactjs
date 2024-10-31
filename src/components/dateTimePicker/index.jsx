import { DateTimePicker  } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ptBR, enUS, esES } from '@mui/x-date-pickers/locales';

const DateTimePickerComponent = ({ ...props }) => {
    return  <LocalizationProvider
                localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}
                dateAdapter={AdapterDayjs}
            >
                <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker {...props} />
                </DemoContainer>
            </LocalizationProvider>
}

export default DateTimePickerComponent;