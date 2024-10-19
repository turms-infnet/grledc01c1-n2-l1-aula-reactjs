import React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker  } from '@mui/x-date-pickers/DateTimePicker';
import { ptBR } from '@mui/x-date-pickers/locales';
import { enUS } from '@mui/x-date-pickers/locales';
import { esES } from '@mui/x-date-pickers/locales';
import { useAppContext } from '../../Context';

const DateTimePickerComponent: React.FC = ({...props}) => {
  const { storedLanguage } = useAppContext();

  const getLanguage = () => {
    console.log(storedLanguage);
    switch(storedLanguage) {
      case "pt":
      return ptBR.components.MuiLocalizationProvider.defaultProps.localeText;

      case "en":
      return enUS.components.MuiLocalizationProvider.defaultProps.localeText;

      case "es":
      return esES.components.MuiLocalizationProvider.defaultProps.localeText;

      default:
      return ptBR.components.MuiLocalizationProvider.defaultProps.localeText;
    }
  }

  return (
    <LocalizationProvider 
      localeText={getLanguage()}
      dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker
          className={`general-textfield ${props.className ? props.className : ""}`}
          {...props} />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default DateTimePickerComponent;
