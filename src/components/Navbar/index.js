import React from 'react';
import { Nav, NavbarContainer, NavLogo, Span, NavItems, NavLink, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyle';
import Logo from '../../images/HHP.png';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer' }}>
            <img src={Logo} alt="Logo" style={{ width: '4rem' }} />
            <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#achievements">Achievements</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">GitHub</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setOpen(!isOpen)
            }}>About
            </MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setOpen(!isOpen)
            }}>Skills
            </MobileLink>
            <MobileLink href='#education' onClick={() => {
              setOpen(!isOpen)
            }}>Education
            </MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setOpen(!isOpen)
            }}>Projects
            </MobileLink>
            <MobileLink href='#achievements' onClick={() => {
              setOpen(!isOpen)
            }}>Achievements
            </MobileLink>
            <GitHubButton style={{ padding: '10px 15px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">GitHub</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar