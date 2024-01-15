import { NavLink, useNavigate, Link } from "react-router-dom"
import logo from './images/zepto-logo.png'
import "./CSS/DashboardCss.css"
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'   
import { IoHelpCircleOutline } from 'react-icons/io5'
import { MdLogout } from 'react-icons/md'
import { BiSolidUserDetail } from 'react-icons/bi'
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMessage, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { RxHamburgerMenu } from "react-icons/rx";
import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";

const BadgeContentSpan = styled('span')(({ theme }) => ({
	width: 8,
	height: 8,
	borderRadius: '50%',
	backgroundColor: theme.palette.success.main,
	boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
}))

export const HOC = (Component) =>{

    const NewComponent = (props)=>{
        const [anchorEl, setAnchorEl] = useState(null)

	const handleDropdownOpen = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const styles = {
		py: 2,
		px: 4,
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		color: 'text.primary',
		textDecoration: 'none',
		'& svg': {
			fontSize: '1.375rem',
			color: 'text.secondary',
		},
	}

	const handleDropdownClose = (url) => {
		if (url) {
			navigate(url)
		}
		setAnchorEl(null)
	}
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const navigate = useNavigate()
        const logOut = () =>{
            localStorage.removeItem("IsLogin")
            props.setIslogin(false)
            navigate("/")

        }
        return <>
            <div>
                <div>
                    <Navbar collapseOnSelect expand="lg" className="navbar p-0 m-0"  >
                        <Button  onClick={handleShow} className=" mx-2 line">
                            <RxHamburgerMenu />
                        </Button>
                        <Offcanvas show={show} onHide={handleClose} backdrop="static" className="navlink">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>
                                    <img src={logo} alt=""  width={"150px"} className=" text-center ps-5"/>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <ul className=' list-unstyled menu px-2'>
                                    <NavLink to="/dashboard"><li className="text-dark">Dashboard</li></NavLink>
                                    <NavLink to="/profile"><li className="text-dark">Profile</li></NavLink>
                                    <NavLink to="/project"><li className="text-dark">Projects</li></NavLink>
                                    <NavLink to="/albums"><li className="text-dark">Albums</li></NavLink>
                                    <NavLink to="/recentactivities"><li className="text-dark">Recent Activities</li></NavLink>
                                </ul>
                            </Offcanvas.Body>
                        </Offcanvas>
                        
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                        </Form>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"></Nav>
                            <Nav>
                                <FontAwesomeIcon icon={faMessage} className=" mx-1 mt-2" />
                                <FontAwesomeIcon icon={faBell}  className=" mx-1 mt-2"/>
                                <Badge
						overlap="circular"
						onClick={handleDropdownOpen}
						sx={{ ml: 2, cursor: 'pointer' }}
						badgeContent={<BadgeContentSpan />}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						}}
                        className=" me-auto"
					>
						<Avatar
							alt={localStorage.getItem('userName')}
							onClick={handleDropdownOpen}
							sx={{ width: 40, height: 40 }}
							src="/images/avatars/1.png"
						/>
					</Badge>
					<Menu
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={() => handleDropdownClose()}
						sx={{
							'& .MuiMenu-paper': { width: 210, marginTop: 3 },
						}}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
					>
						<Box
							style={{ top: '40px' }}
							sx={{ pt: 2, pb: 3, px: 4 }}
						>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<Badge
									overlap="circular"
									badgeContent={<BadgeContentSpan />}
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'right',
									}}
								>
									<Avatar
										alt={localStorage.getItem('userName')}
										src="/images/avatars/1.png"
										sx={{
											width: '2.5rem',
											height: '2.5rem',
										}}
									/>
								</Badge>
								<Box
									sx={{
										display: 'flex',
										marginLeft: 3,
										alignItems: 'flex-start',
										flexDirection: 'column',
									}}
								>
									<Typography sx={{ fontWeight: 600 }}>
										{localStorage.getItem('userName')}
									</Typography>
									<Typography
										variant="body2"
										sx={{
											fontSize: '0.8rem',
											color: 'text.disabled',
										}}
									>
										Admin
									</Typography>
								</Box>
							</Box>
						</Box>
						<MenuItem
							sx={{ p: 0 }}
							onClick={() => handleDropdownClose()}
						>
							<Box sx={styles}>
								<BiSolidUserDetail
									style={{ marginRight: '0.5rem' }}
								/>
								<Link
									className="text-decoration-none text-dark"
									to="/profileDetails"
								>
									Profile Settings
								</Link>
							</Box>
						</MenuItem>
						<Divider sx={{ mt: 0, mb: 1 }} />
						<MenuItem
							sx={{ p: 0 }}
							onClick={() => handleDropdownClose()}
						>
							<Box sx={styles}>
								<IoHelpCircleOutline
									style={{ marginRight: '0.5rem' }}
								/>
								FAQ
							</Box>
						</MenuItem>
						<Divider />
						<MenuItem sx={{ p: 0 }} onClick={logOut}>
							<Box sx={styles}>
								<MdLogout style={{ marginRight: '0.5rem' }} />
								Log Out
							</Box>
						</MenuItem>
					</Menu>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div> 
                <div>
                    <Component />
                </div>                         
            </div>
    </>
               
    }
    return NewComponent
}