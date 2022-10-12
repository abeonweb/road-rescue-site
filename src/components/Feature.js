import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"

export default function Feature(props){
    return (
        <Grid className={props.type} item xs={4} md={4}>
            <Paper
             sx={
                {
                    backgroundColor: props.bgColor, 
                    color:"rgba(61, 61, 61, 0.9)" 
                }
            }
             
             elevation={props.elevation}
        >
            <img className="image" src={require("../images/"+ props.image + ".png")} alt={props.image + " icon"}/>
            <div className="info">
                <h4 className="heading">{props.heading}</h4>
                <p className="body">{props.body}</p>
            </div>
            </Paper>
        </Grid>
    )
}