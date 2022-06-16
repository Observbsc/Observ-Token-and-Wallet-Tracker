import { Button, Card, Container, Grid, Link, Text } from "@nextui-org/react";
import BrandIcon from "../icons/BrandIcon";
import SvgIcon from "../icons/SvgIcon";

export default function Footer() {

    return (
        <>
        <Card css={{ br: 0, mt: 50 }}>
            <Card.Body css={{ pt: 40, pb: 20 }}>
                <Container gap={3}>
                    <Grid.Container alignItems="center" justify="space-between">
                        <Grid>
                            <Text size={30} b css={{ lh: 1 }}>Observ</Text>
                            <Text>
                                Binance Smart Chain
                            </Text>
                        </Grid>
                        <Grid>
                            <Grid.Container>
                                <Grid>
                                    <Link href="https://twitter.com/observbsc" target="_blank" rel="nofollow noopener noreferrer">
                                        <Button auto light css={{ px: 10 }} color="primary">
                                            <BrandIcon 
                                                icon="twitter" 
                                                size={24} 
                                                stroke={2}/>
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid>
                                    <Link href="https://t.me/observbsc" target="_blank" rel="nofollow noopener noreferrer">
                                        <Button auto light css={{ px: 10 }} color="primary">
                                            <BrandIcon 
                                                icon="discord" 
                                                size={30} 
                                                stroke={1}/>
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid.Container>
                        </Grid>
                    </Grid.Container>
                </Container>
            </Card.Body>
        </Card>
        <Card css={{ br: 0}}>
            <Card.Body css={{ pt: 0 }}>
                <Container>
                    <Grid.Container gap={2} alignItems="center" justify="space-between">
                        <Grid>
                            Observ &copy; 2022 | Built by a pretty awesome team
                        </Grid>
                        <Grid>
                            <Text>
                                Email the team | <a href="mailto:hello@observbsc.com" rel="no follow">Contact Us</a>
                            </Text>
                        </Grid>
                        <Grid>
                            <Text>
                                <a href="https://observbsc.com" rel="no follow">Home</a>
                            </Text>
                            <Text>
                                <a href="https://observbsc.com/swap" rel="no follow">ObservX</a>
                            </Text>
                            <Text>
                                <a href="https://shop.observbsc.com" rel="no follow">Online Store</a>
                            </Text>
                            <Text>
                                <a href="https://docs.observbsc.com" rel="no follow">Documents</a>
                            </Text>
                        </Grid>
                    </Grid.Container>
                   
                </Container>
            </Card.Body>
        </Card>
        </>
    )
}