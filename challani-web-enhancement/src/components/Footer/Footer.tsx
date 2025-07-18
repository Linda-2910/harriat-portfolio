// Footer.tsx
import { Email } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { FaCcAmex, FaCcMastercard, FaCcVisa, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Copyright, ContactBox, FooterContainer, FooterContent, HeaderText, HoverIcon, InfoLine, LeftGrid, LinkItem, NewsletterBox, NewsletterContainer, PaymentIcons, RightWrap, Section, SocialIcons, SubText, TextWrapper } from './Footer.styled';


export const Footer = () => {
    return (
        <FooterContainer id='footer'>
            <NewsletterContainer>
                <TextWrapper>
                    <HeaderText variant="h5">Subscribe to our newsletter now!</HeaderText>
                    <SubText>Be the first to know about new designs, offers, and more...</SubText>
                </TextWrapper>

                <NewsletterBox>
                    <TextField
                        variant="outlined"
                        placeholder="Enter your email"
                        fullWidth
                        sx={{ maxWidth: '400px' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton color="primary">
                                        <Email />
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                    />
                </NewsletterBox>
                <ContactBox>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#4e2e2e', mr: 2 }}>
                        Contact Us:
                    </Typography>

                    <InfoLine>
                        <PhoneIcon sx={{ fontSize: '1.1rem', color: '#6b4c4c', mr: 0.5 }} />
                        <Typography sx={{ fontSize: '1rem', color: '#6b4c4c', mr: 2 }}>
                            +91 98765 43210
                        </Typography>

                        <EmailIcon sx={{ fontSize: '1.1rem', color: '#6b4c4c', mr: 0.5 }} />
                        <Typography sx={{ fontSize: '1rem', color: '#6b4c4c' }}>
                            hello@luxejewelz.com
                        </Typography>
                    </InfoLine>
                </ContactBox>

            </NewsletterContainer>

            <FooterContent>
                <LeftGrid>
                    {/* SHOP BY CATEGORY */}
                    <Section>
                        <Typography variant='h6' color='secondary'>SHOP BY CATEGORY</Typography>
                        {['Earrings', 'Bangles', 'Pendants', 'Necklaces'].map((item) => (
                            <LinkItem
                                key={item}
                                style={{ fontSize: '1.05rem', fontWeight: 500 }}
                            >
                                {item}
                            </LinkItem>
                        ))}
                    </Section>

                    {/* CUSTOMER SERVICE */}
                    <Section>
                        <Typography variant='h6' color='secondary'>CUSTOMER SERVICE</Typography>
                        {['Login', 'Ring Size Guide', 'Return Policy', 'Privacy Policy', 'Terms & Conditions', 'FAQ'].map((item) => (
                            <LinkItem
                                key={item}
                                style={{ fontSize: '1.05rem', fontWeight: 500 }}
                            >
                                {item}
                            </LinkItem>
                        ))}
                    </Section>

                    {/* OUR COMPANY */}
                    <Section>
                        <Typography variant='h6' color='secondary'>OUR COMPANY</Typography>
                        {['About Us', 'Contact Us'].map((item) => (
                            <LinkItem
                                key={item}
                                style={{ fontSize: '1.05rem', fontWeight: 500 }}
                            >
                                {item}
                            </LinkItem>
                        ))}
                    </Section>
                </LeftGrid>


                <RightWrap>
                    <Typography variant="subtitle1" sx={{ color: '#3b2626', fontWeight: 600, mb: 1 }}>
                        Follow Us On
                    </Typography>

                    <SocialIcons>
                        <HoverIcon><FaInstagram /></HoverIcon>
                        <HoverIcon><FaFacebook /></HoverIcon>
                        <HoverIcon><FaTwitter /></HoverIcon>
                    </SocialIcons>

                    <Typography variant="subtitle1" sx={{ color: '#3b2626', fontWeight: 600, mb: 1 }}>
                        Payment Methods
                    </Typography>
                    <PaymentIcons>
                        <HoverIcon><FaCcVisa /></HoverIcon>
                        <HoverIcon><FaCcMastercard /></HoverIcon>
                        <HoverIcon><FaCcAmex /></HoverIcon>
                    </PaymentIcons>
                </RightWrap>
            </FooterContent>


            <Copyright>
                © {new Date().getFullYear()} ARCKZ. All rights reserved.
            </Copyright>
        </FooterContainer>
    );
};
