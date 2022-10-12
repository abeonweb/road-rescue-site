import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Benefit from './Benefit'
import {benefits} from "../data"


export default function Benefits(){
  const benefitsList = benefits.map(benefit =>(
      <Benefit
        key={benefit.id}
        type={"benefit"}
        elevation={0}
        bgColor={"#BBFFCA"}
        image={benefit.image}
        heading={benefit.heading}
        body={benefit.body}
      />
    )) 
    
    return (
      <>
      <div className="triangle animate__animated animate__shakeY animate__delay-2s animate__repeat-1 animate__slow"></div>
        <section className='section section__benefits'>
        <Container fixed>
          <Grid container columnSpacing={3} rowSpacing={5} columns={{xs:4, md:12}}>
            {benefitsList}
          </Grid>
        </Container>
      </section>
      </>
    )
}