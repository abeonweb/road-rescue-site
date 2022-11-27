import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"

export default function Feature(props) {
    return (
        <Grid className={props.type} item xs={4} md={4}>
            <Paper
                sx={
                    {
                        backgroundColor: props.bgColor,
                        color: "rgba(61, 61, 61, 0.9)"
                    }
                }

                elevation={props.elevation}
            >
                <span className="feature-image-container shadow">
                    <img className="feature-image" src={require("../images/" + props.image + ".png")} alt={props.image + " icon"} />
                </span>
                <div className="feature-info">
                    <h4 className="feature-title">{props.heading}</h4>
                    <p className="feature-body">{props.body}</p>
                </div>
            </Paper>
        </Grid>
    )
}