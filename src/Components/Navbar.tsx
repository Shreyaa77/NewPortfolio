import logo from "./../images/ul-logo.svg";
const Navbar = () => {
    return (
        <header className="header fixed min-w-full">
        <nav className="navbar">
        <div className="logo-container">
            <img src={logo} className="h-14 w-44"/>
         </div> 
         
         <ul className='nav-links'>
         <li><a href="/">Home</a></li>
         <li><a href="/about">About</a></li>
         <li><a href="/skills">Skills</a></li>
         <li><a href="/blog">Blog</a></li>
         <li><a href="/contact">Contact</a></li>
         
       </ul>
       </nav>
       </header>
    );
  };
  
  export default Navbar;
  