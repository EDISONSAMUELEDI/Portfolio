import React, { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    
    <header className="nav">
      <div className="nav-inner">
        <div className="logo">EDI</div>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''} onClick={()=>setOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''} onClick={()=>setOpen(false)}>About</NavLink>
          <NavLink to="/certificates" className={({isActive}) => isActive ? 'active' : ''} onClick={()=>setOpen(false)}>Certificates</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''} onClick={()=>setOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

