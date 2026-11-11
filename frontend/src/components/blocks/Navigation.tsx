import type { IconType } from "react-icons"
import { Link } from "@tanstack/react-router"

interface NavItem {
    text: string
    href: string
    icon?: IconType
}

interface NavigationProps {
    title: NavItem
    items: NavItem[]
}

function NavLink({ text, href, icon: Icon }: NavItem) {
    return (
        <Link
            to={href}
            className="flex items-center gap-x-3 rounded-xl px-2 py-2 text-sm transition-colors hover:bg-line my-1"
            activeProps={{ className: "bg-line" }}
            activeOptions={{ exact: true }}
        >
            {Icon && <Icon aria-hidden="true" className="size-4 shrink-0 text-ink-soft" />}
            {text}
        </Link>
    )
}

export function Navigation({ title, items }: NavigationProps) {
    return (
        <nav aria-label="Main">
            <NavLink {...title} />
            <ul className="flex flex-col my-2">
                {items.map(item => (
                    <li key={item.href} className="ml-4 border-l border-line pl-2">
                        <NavLink {...item} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}
