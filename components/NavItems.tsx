'use client'

import {NAV_ITEMS} from "@/lib/constants";
import Link from "next/link";
import {usePathname} from "next/navigation";

interface NavItemsProps {
    inDropdown?: boolean;
}

const NavItems = ({ inDropdown = false }: NavItemsProps) => {
    const pathname = usePathname();

    const isActive: (path: string) => boolean = (path: string) => {
        if (path === '/') return pathname === '/';

        return pathname.startsWith(path);
    }

    if (inDropdown) {
        return (
            <div className="flex flex-col py-2">
                {NAV_ITEMS.map(({href, label}) => (
                    <Link
                        key={href}
                        href={href}
                        className={`px-2 py-2 text-gray-300 font-medium hover:bg-gray-800 hover:text-yellow-500 transition-colors rounded-sm ${
                            isActive(href) ? 'text-yellow-500' : ''
                        }`}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        )
    }

    return (
        <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
            {NAV_ITEMS.map(({href, label}) => (
                <li key={href}>
                    <Link href={href} className={`hover:text-yellow-500 transition-colors ${
                        isActive(href) ? 'text-gray-100' : ''
                    }`}>
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default NavItems