import { FooterContainer, FooterWrapper, Logo, Nav, NavLink, SocialMediaIcons, SocialMediaIcon, Copyright } from './FooterStyle';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Himidiri Himakanika</Logo>
                <Nav>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#education">Education</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.facebook} target="display"><FacebookIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
                </SocialMediaIcons>
                <Copyright>
                    &copy; 2023 Himidiri Himakanika. All rights reserved.
                </Copyright>

            </FooterWrapper>
        </FooterContainer>
    );
}

export default Footer;