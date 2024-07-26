// src/pages/HomeScreen.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listItems } from '../actions/itemactions';
import { Container, Grid, Typography } from '@material-ui/core';
import Item from '../components/Item';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const itemList = useSelector((state) => state.itemList);
    const { loading, error, items } = itemList;

    useEffect(() => {
        dispatch(listItems());
    }, [dispatch]);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Items
            </Typography>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h3>{error}</h3>
            ) : (
                <Grid container spacing={3}>
                    {items.map((item) => (
                        <Grid item key={item._id} xs={12} sm={6} md={4} lg={3}>
                            <Item item={item} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default HomeScreen;
