import Image from 'next/image'
import Link from 'next/link'

function Navbar() {

    const Links = <>
        <li><Link href="/workouts" className='focus:bg-[#2a391c] active:bg-[#2a391c] hover:bg-[#2a391c] text-[#9CA3AF] focus:text-[#C2F800] active:text-[#C2F800] hover:text-[#C2F800] rounded-3xl'>Workouts</Link></li>
        <li><Link href="/my-plan" className='focus:bg-[#2a391c] active:bg-[#2a391c] hover:bg-[#2a391c] text-[#9CA3AF] focus:text-[#C2F800] active:text-[#C2F800] hover:text-[#C2F800] rounded-3xl'>My Plan</Link></li>
    </>

    return (
            <nav className="navbar bg-[#0C0D10] shadow-sm border-b-2 border-[#1A1B1F] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links}
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl flex items-center gap-2"><Image src="/icon.png" alt="FITLOG" width={25} height={25}/><h3>FITLOG</h3></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="/my-plan" className="btn btn-ghost text-[#9CA3AF] focus:text-[#C2F800] active:text-[#C2F800] hover:text-[#C2F800] rounded-3xl">Plan <span>{}</span></Link>
                    <Link href="/my-plan" className="btn btn-ghost text-[#9CA3AF] focus:text-[#C2F800] active:text-[#C2F800] hover:text-[#C2F800] rounded-3xl">Saved <span>{}</span></Link>
                </div>
            </nav>
    )
}

export default Navbar