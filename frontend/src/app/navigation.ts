import { GoGlobe, GoHome, GoPerson, GoWorkflow } from "react-icons/go"

export const navTitle = { text: "Informator", href: "/", icon: GoHome }

export const navItems = [
    { text: "Account", href: "/login", icon: GoPerson },
    { text: "Page list", href: "/pagelist", icon: GoGlobe },
    { text: "Playground", href: "/playground", icon: GoWorkflow },
]
