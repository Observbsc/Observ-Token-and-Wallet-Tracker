import Twitter from "../../public/img/icons/brands/twitter.svg";
import Discord from "../../public/img/icons/brands/discord.svg";

const iconTypes = {
    twitter: Twitter,
    discord: Discord,
}

export default function BrandIcon({ icon, size, className }) {

    if (!iconTypes[icon])
        return null;

    let Icon = iconTypes[icon];
    return <Icon className={className} style={{ fill: "currentColor", width: size, height: size }}/>
}