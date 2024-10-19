import React from 'react';
import { Box, DateTimePicker, Grid, TextField } from '../..';
import { handleInputChange } from '../../../utils/actions';
import dayjs from 'dayjs';
import { adjustDateTimeForTimezone } from '../../../utils/date';

interface SleepProps {
  data: any;
  setData: (data: any) => void;
  t: (key: string) => string;
}

const Sleep: React.FC<SleepProps> = ({ data, setData, t }) => {
  return <Box component="form" noValidate sx={{ mt: 1, display: 'flex' }}>
            <Grid container={true} spacing={2}>
              <Grid item={true} size={{ xs: 12 }}>
                <DateTimePicker
                  value={data?.start_date ? dayjs(adjustDateTimeForTimezone(data.start_date)) : null}
                  label={t("data-hour-start")}
                  name="start_date"
                  fullWidth={true}
                  ampm={false}
                  format="DD/MM/YYYY HH:mm"
                  onChange={(value) => handleInputChange('start_date', new Date(value.toString()), data, setData)}
                />
              </Grid>
              <Grid item={true} size={{ xs: 12 }}>
                <DateTimePicker
                  value={data?.end_date ? dayjs(adjustDateTimeForTimezone(data.end_date)) : null}
                  label={t("data-hour-end")}
                  name="end_date"
                  fullWidth={true}
                  ampm={false}
                  format="DD/MM/YYYY HH:mm"
                  onChange={(value) => handleInputChange('end_date', new Date(value.toString()), data, setData)}
                />
              </Grid>
              <Grid item={true} size={{ xs: 12 }}>
                <TextField
                  value={data?.observation}
                  label={t("observation")}
                  name="observation"
                  onChange={(event) => handleInputChange('observation', event.target.value, data, setData)}
                  rows={6}
                  format="DD/MM/YYYY HH:mm"
                  fullWidth={true}
                  multiline={true}/>
              </Grid>
            </Grid>
          </Box>
};

export default Sleep;
