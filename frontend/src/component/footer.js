
import { Container, Typography, Box } from '@material-ui/core';

const Footer = () => {
    return (
        <Box mt={5}>
            <Container>
                <Typography variant="body2" color="textSecondary" align="center">
                    &copy; {new Date().getFullYear()} Inventory Management. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
