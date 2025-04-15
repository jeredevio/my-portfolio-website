import Link from "next/link"

const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href}
            className='text-white hover:text-cyan-400 transition-colors duration-300 text-4xl md:text-lg font-medium'
        >
            {title}
        </Link>
    )
}

export default NavLink;

