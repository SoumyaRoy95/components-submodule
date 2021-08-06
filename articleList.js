import React from 'react'
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import Article from './article'


const articleList = () => {
    
    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Article/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Article/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Article/>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Article/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Article/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Article/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default articleList
