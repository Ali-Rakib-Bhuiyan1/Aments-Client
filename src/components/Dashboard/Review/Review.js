import React from 'react';
import { useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import useAuth from '../../../hooks/useAuth';
import'./Review.css'

const Review = () => {
    const {user} = useAuth();
    const history = useHistory();
    const redirect_uri = '/';
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        fetch('https://fast-savannah-83899.herokuapp.com/reviews', {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) =>{alert("Review Added Successfully!");
          reset();
          history.push(redirect_uri);});
    };

    return (
        <div>
            <Container>
            <Grid item xs={4} sm={8} md={6} >
            {/* <Container sx={{mt:5, mb:8}}> */}
            <Typography sx={{textAlign: 'center', m:1, mb:3,  fontWeight:'700'}} variant="h5" component="div">
                Add a review
            </Typography>
            <Card className ="form-field" sx={{ boxShadow: 2, border: 0, m:2, p:5, width:'80%', mx:'auto'}}>
               <form onSubmit={handleSubmit(onSubmit)} >
                    <input
                    { ...register("name")}
                    defaultValue={user.displayName}
                    placeholder="Name"
                    />
                    <br />
                    <br />
                    <input
                    {...register("review", { required: true })}
                    type="text"
                    placeholder="Write Review"
                    />
                    <br />
                    <br />
                    <input
                    {...register("rating", { required: true })}
                    type="number"
                    placeholder="Rate out of 5"
                    />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <br />
                    <input style={{ color:'white' ,backgroundColor:'blue'}} type="submit" value="Confirm Submit"  />
                </form>
            </Card>
            </Grid>





        </Container>
        </div>
    );
};

export default Review;