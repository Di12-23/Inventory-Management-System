// src/pages/ItemScreen.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listItemDetails } from '../actions/itemActions';
import { Container, Typography, Card, CardContent, CardMedia } from '@material-ui/core';

const ItemScreen = ({ match }) => {
    const dispatch = useDispatch();
    const itemDetails = useSelector((state) => state.itemDetails);
    const { loading, error, item } = itemDetails;

    useEffect(() => {
        dispatch(listItemDetails(match.params.id));
    }, [dispatch, match]);

    return (
        <Container>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h3>{error}</h3>
            ) : (
                <Card>
                    <CardMedia component="img" image={item.image} title={item.name} />
                    <CardContent>
                        <Typography variant="h5">{item.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                            {item.description}
                        </Typography>
                        <Typography variant="body2" color="textPrimary">
                            Stock: {item.stock}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Container>
    );
};

export default ItemScreen;
