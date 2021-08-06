import React from 'react'
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Article from './article'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'


const articleList = () => {
    
    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Article img={img1} title="Construction"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Article img={img2} title="Cooking"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Article img={img3} title="Interiors"/>
                    </Grid>
                </Grid>
                <Grid container spacing={3} margin-top="50px">
                    <Grid item xs={12} sm={6} md={4}>
                        <Article img={img2} title="Cooking"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Article img={img3} title="Interiors"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Article img={img1} title="Construction"/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default articleList
