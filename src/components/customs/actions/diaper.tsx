import React from 'react';
import { Button, Box, TextField, Grid, DateTimePicker } from '../..';
import { verifySelected } from '../../../utils/verifies';
import { handleInputChange } from '../../../utils/actions';
import dayjs from 'dayjs';
import { adjustDateTimeForTimezone } from '../../../utils/date';
interface DiaperProps {
  data: any;
  setData: (data: any) => void;
  t: (key: string) => string;
}

const Diaper: React.FC<DiaperProps> = ({ data, setData, t }) => {

  return  <Box component="form" noValidate sx={{ mt: 1, display: 'flex' }}>
              <Grid container={true} spacing={2}>
                <Grid item={true} size={{ xs: 6 }}>
                  <Button onClick={() => handleInputChange('type', 1, data, setData)} fullWidth={true} variant={verifySelected(1, data, 'type')}>{t('diaper-wet')}</Button>
                </Grid>
                <Grid item={true} size={{ xs: 6 }}>
                  <Button onClick={() => handleInputChange('type', 2, data, setData)} fullWidth={true} variant={verifySelected(2, data, 'type')}>{t('diaper-dirty')}</Button>
                </Grid>
                <Grid item={true} size={{ xs: 6 }}>
                  <Button onClick={() => handleInputChange('type', 3, data, setData)} fullWidth={true} variant={verifySelected(3, data, 'type')}>{t('diaper-both')}</Button>
                </Grid>
                <Grid item={true} size={{ xs: 6 }}>
                  <Button onClick={() => handleInputChange('type', 4, data, setData)} fullWidth={true} variant={verifySelected(4, data, 'type')}>{t('diaper-clean')}</Button>
                </Grid>
                <Grid item={true} size={{ xs: 12 }}>
                  <DateTimePicker
                    value={data?.start_date ? dayjs(adjustDateTimeForTimezone(data.start_date)) : null}
                    label={t("data-hour")}
                    name="start_date"
                    fullWidth={true}
                    ampm={false}
                    format="DD/MM/YYYY HH:mm"
                    onChange={(value) => handleInputChange('start_date', new Date(value.toString()), data, setData)}
                  />
                </Grid>
                <Grid item={true} size={{ xs: 12 }}>
                  <TextField
                    value={data?.observation}
                    label={t("observation")}
                    name="observation"
                    onChange={(event) => handleInputChange('observation', event.target.value, data, setData)}
                    rows={6}
                    fullWidth={true}
                    multiline={true}/>
                </Grid>
              </Grid>
            </Box>
};

export default Diaper;
