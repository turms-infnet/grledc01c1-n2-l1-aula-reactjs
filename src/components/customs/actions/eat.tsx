import React from 'react';
import { Box, Button, DateTimePicker, Grid, TextField, Typography } from '../..';
import { verifySelected } from '../../../utils/verifies';
import { handleInputChange } from '../../../utils/actions';
import dayjs from 'dayjs';
import { adjustDateTimeForTimezone } from '../../../utils/date';

interface EatProps {
  data: any;
  setData: (data: any) => void;
  t: (key: string) => string;
}

const Eat: React.FC<EatProps> = ({ data, setData, t }) => {
  return  <Box component="form" noValidate sx={{ mt: 1, display: 'flex' }}>
            <Grid container={true} spacing={2}>
                <Grid item={true} size={{ xs: 12 }}>
                  <Typography>{t("type")}:</Typography>
                </Grid>
                <Grid item={true} size={{ xs: 6 }}>
                    <Button onClick={() => handleInputChange('type', 1, data, setData)} fullWidth={true} variant={verifySelected(1, data, 'type')}>{t('eat-bottle')}</Button>
                </Grid>
                <Grid item={true} size={{ xs: 6 }}>
                  <Button onClick={() => handleInputChange('type', 2, data, setData)} fullWidth={true} variant={verifySelected(2, data, 'type')}>{t('eat-bosom')}</Button>
                </Grid>
                { data?.type === 1 ?
                  <>
                    <Grid item={true} size={{ xs: 12 }}>
                      <TextField
                        value={data.quantity}
                        label={t("quantity")}
                        name="quantity"
                        onChange={(event) => handleInputChange('quantity', event.target.value, data, setData)}
                        fullWidth={true}/>
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
                  </>
                  : null }
                  {
                    data?.type === 2 ?
                    <>
                      <Grid item={true} size={{ xs: 12 }}>
                        <Typography>{t("side")}:</Typography>
                      </Grid>
                      <Grid item={true} size={{ xs: 4 }}>
                          <Button onClick={() => handleInputChange('side', 1, data, setData)} fullWidth={true} variant={verifySelected(1, data, 'side')}>{t('left')}</Button>
                      </Grid>
                      <Grid item={true} size={{ xs: 4 }}>
                        <Button onClick={() => handleInputChange('side', 2, data, setData)} fullWidth={true} variant={verifySelected(2, data, 'side')}>{t('right')}</Button>
                      </Grid>
                      <Grid item={true} size={{ xs: 4 }}>
                        <Button onClick={() => handleInputChange('side', 3, data, setData)} fullWidth={true} variant={verifySelected(3, data, 'side')}>{t('both')}</Button>
                      </Grid>
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
                    </>
                    : null
                  }
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

export default Eat;
