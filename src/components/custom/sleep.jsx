import { useEffect } from "react";
import { DateTimePicker, Grid, TextField } from "..";
import { handleInputChange } from "../../utils/action";
import { adjustDateTimeForTimezone } from "../../utils/core";

const Sleep = ({ data, setData, translate }) => {
  useEffect(() => {
    setData({...data, 'action_type': 1})  
  }, [])

  return  <Grid container={true} spacing={2}>
              <Grid item={true} size={{ xs: 12 }}>
                <DateTimePicker
                  value={data?.start_date ? adjustDateTimeForTimezone(data?.start_date) : null}
                  label={translate("data-hour-start")}
                  name="start_date"
                  fullWidth={true}
                  ampm={false}
                  format="DD/MM/YYYY HH:mm"
                  onChange={(value) => {handleInputChange('start_date', new Date(value.toString()), data, setData)}}
                />
              </Grid>
              <Grid item={true} size={{ xs: 12 }}>
                <DateTimePicker
                  value={data?.end_date ? adjustDateTimeForTimezone(data?.end_date) : null}
                  label={translate("data-hour-end")}
                  name="end_date"
                  fullWidth={true}
                  ampm={false}
                  format="DD/MM/YYYY HH:mm"
                  onChange={(value) => {handleInputChange('end_date', new Date(value.toString()), data, setData)}}
                />
              </Grid>
              <Grid item={true} size={{ xs: 12 }}>
                <TextField
                  value={data?.observation ? data.observation : ""}
                  label={translate("observation")}
                  onChange={(event) => {handleInputChange('observation', event.target.value, data, setData)}}
                  name="observation"
                  rows={6}
                  fullWidth={true}
                  multiline={true}/>
              </Grid>
            </Grid>
};

export default Sleep;