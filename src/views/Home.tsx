import { Grid } from "../components";

const Home: React.FC = () => {
    return  <Grid container={true}>
                <Grid item={true} size={{xs: 12}}>
                    <Grid container={true}>
                        <Grid item={true} size={{xs: 4}}>1</Grid>
                        <Grid item={true} size={{xs: 4}}>2</Grid>
                        <Grid item={true} size={{xs: 4}}>3</Grid>
                    </Grid>
                </Grid>
                <Grid item={true} size={{xs: 12}}>
                    <Grid container={true}>
                        <Grid item={true} size={{xs: 4}}>4</Grid>
                        <Grid item={true} size={{xs: 4}}>5</Grid>
                        <Grid item={true} size={{xs: 4}}>6</Grid>
                    </Grid>
                </Grid>
            </Grid>
};

export default Home;