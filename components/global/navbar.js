import { useTheme as useNextTheme } from 'next-themes'
import { Container, Grid, useTheme } from "@nextui-org/react";

export default function Navbar() {

    const { setTheme } = useNextTheme();
    const { isDark, type } = useTheme();

    return(
        <div className="nav-container">
            <Container>
                <Grid.Container gap={0} justify="space-between" alignItems='center'>
                    <Grid>
                        <Grid.Container gap={1}>
                            <Grid>
                                <a className="nav-link" href="https://observbsc.com">
                                    Home
                                </a>
                            </Grid>
                        </Grid.Container>
                    </Grid>
                    <Grid>
                        <Grid.Container alignItems="center" gap={1}>
                            
                        </Grid.Container>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}