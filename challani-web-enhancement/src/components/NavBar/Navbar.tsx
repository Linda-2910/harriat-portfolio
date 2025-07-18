import {
    ContactMailOutlined,
    DiamondOutlined,
    InfoOutlined,
    SearchOutlined,
    ShoppingBagOutlined
} from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import Tooltip from '@mui/material/Tooltip';
import { IconsWrapper, Logo, NavContainer, SearchWrapper, StyledIconButton, StyledSearchInput } from './Navbar.styled';
import { scrollToSection } from '../../utils/scrollToSection';

const Navbar = () => {
    return (
        <NavContainer>
            <Logo src="/Logo.png" alt="Jewelry Logo"
                onClick={() => scrollToSection('hero', 50)}
            />
            <SearchWrapper>
                <StyledSearchInput
                    placeholder="Search exquisite pieces…"
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchOutlined color="primary" />
                        </InputAdornment>
                    }
                />
            </SearchWrapper>

            <IconsWrapper>
                <Tooltip title="Collection" arrow>
                    <StyledIconButton onClick={() => scrollToSection('collection', 50)}
                    >
                        <DiamondOutlined />
                    </StyledIconButton>
                </Tooltip>

                <Tooltip title="About Us" arrow>
                    <StyledIconButton onClick={() => scrollToSection('why-us', 100)}
                    >
                        <  InfoOutlined />
                    </StyledIconButton>
                </Tooltip>

                <Tooltip title="Contact" arrow>
                    <StyledIconButton onClick={() => scrollToSection('footer', 50)}
                    >
                        <ContactMailOutlined />
                    </StyledIconButton>
                </Tooltip>

                <Tooltip title="Cart" arrow>
                    <StyledIconButton>
                        <  ShoppingBagOutlined />
                    </StyledIconButton>
                </Tooltip>
            </IconsWrapper>
        </NavContainer>
    );
};

export default Navbar;
