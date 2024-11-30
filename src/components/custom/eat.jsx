import { useEffect } from "react";
import { Button, DateTimePicker, Grid, TextField } from "..";
import { handleInputChange, selectItem } from "../../utils/action";
import { adjustDateTimeForTimezone } from "../../utils/core";

const Eat = ({ data, setData, translate }) => {
    useEffect(() => {
        setData({...data, 'action_type': 2})  
    }, [])
    
    return <Grid container={true} spacing={2}>
              <Grid item={true} size={{ xs: 12 }}>
                  <Button color={data.type === 1 ? "secondary" : "primary"} onClick={() => { 
                    handleInputChange('side', null, data, setData);
                    handleInputChange('end_date', null, data, setData);
                    selectItem(1, "type", data, setData);
                  }}>{translate("eat-bottle")}</Button>
                  <Button color={data.type === 2 ? "secondary" : "primary"} onClick={() => {
                    handleInputChange('quantity', null, data, setData); 
                    selectItem(2, "type", data, setData);
                  }}>{translate("eat-bosom")}</Button>
              </Grid>
              <Grid item={true} size={{ xs: 12 }}>
                  <DateTimePicker
                      value={data?.start_date ? adjustDateTimeForTimezone(data?.start_date) : null}
                      label={data.type === 1 ? translate("data-hour") : translate("data-hour-start")}
                      name="start_date"
                      fullWidth={true}
                      ampm={false}
                      format="DD/MM/YYYY HH:mm"
                      onChange={(value) => {handleInputChange('start_date', new Date(value.toString()), data, setData)}}
                  />
              </Grid>
              {
                data.type === 2 ? <Grid item={true} size={{ xs: 12 }}>
                                    <DateTimePicker
                                      value={data?.end_date ? adjustDateTimeForTimezone(data?.end_date) : null}
                                      label={translate("data-hour-end")}
                                      name="end_date"
                                      fullWidth={true}
                                      ampm={false}
                                      format="DD/MM/YYYY HH:mm"
                                      onChange={(value) => {handleInputChange('end_date', new Date(value.toString()), data, setData)}}
                                    />
                                  </Grid> : null
              }
              {
                data.type === 1 ? <Grid item={true} size={{ xs: 12 }}>
                                    <TextField
                                      value={data?.quantity ? data.quantity : ""}
                                      label={translate("quantity") + " (ml)"}
                                      onChange={(event) => {handleInputChange('quantity', event.target.value, data, setData)}}
                                      name="quantity"
                                      type={"number"}
                                      fullWidth={true}/>
                                  </Grid> : <Grid item={true} size={{ xs: 12 }}>
                                              <Button color={data.side === 1 ? "secondary" : "primary"} onClick={() => { selectItem(1, "side", data, setData)}}>{translate("left")}</Button>
                                              <Button color={data.side === 2 ? "secondary" : "primary"} onClick={() => { selectItem(2, "side", data, setData)}}>{translate("right")}</Button>
                                              <Button color={data.side === 3 ? "secondary" : "primary"} onClick={() => { selectItem(3, "side", data, setData)}}>{translate("both")}</Button>
                                          </Grid>
              }
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
}

export default Eat;