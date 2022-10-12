import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import CardMedia from '@mui/material/CardMedia';

export default function Benefit(props) {
    return (
        <Grid item xs={4} md={4}>
            <Paper
                className="benefit"
                elevation={0}
            >
                <CardMedia
                    component="img"
                    height="190"
                    image={require("../images/" + props.image + ".webp")}
                    alt=" benefit"
                    className="benefit__image"
                />
                <div className="info">
                    <h4 className="benefit__heading">{props.heading}</h4>
                    <p className="benefit__body">{props.body}</p>
                </div>
            </Paper>
        </Grid>
    )
}