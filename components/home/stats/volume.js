import { Card, Text } from "@nextui-org/react";
import LoadingCard from "../../loading";

export default function VolumeCard({ data }) {

    if (!data) {
        return <LoadingCard/>;
    }

    return(
        <Card shadow={true}>
            <Card.Body css={{ pt: 18 }}>
                <Text size={12}>
                    Volume 24H
                </Text>
                <Text size={18} b>
                    ${data && data.stats.volume.h24.toLocaleString()}
                </Text>
            </Card.Body>
            <Card.Footer css={{ pt: 0 }}>
                <Text css={{ fontSize: 14 }}>
                    ${data && data.stats.volume.h6 ? data.stats.volume.h6.toLocaleString() : "0"} in the last 6 hours
                </Text>
            </Card.Footer>
        </Card>
    )
}