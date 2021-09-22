import { v4 as uuidv4 } from "uuid"

export const NavBarData = [
    {
        id: uuidv4(),
        title: "Homepage",
        url: "/"
    },
    {
        id: uuidv4(),
        title: "Search",
        url: "/searchAdmin"
        /*url: "/search"*/
    },
    {
        id: uuidv4(),
        title: "Contact",
        url: "/contact"
    },
]