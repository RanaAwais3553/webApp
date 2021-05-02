// import InputBase from '@material-ui/core/InputBase';
// import Badge from '@material-ui/core/Badge';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import IconButton from '@material-ui/core/IconButton';
// import InboxIcon from '@material-ui/icons/MoveToInbox';

// const [anchorEl, setAnchorEl] = React.useState(null);
// const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

// const isMenuOpen = Boolean(anchorEl);
// const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


// export const handleProfileMenuOpen = (event) => {
//   setAnchorEl(event.currentTarget);
// };

// const handleMobileMenuClose = () => {
//   setMobileMoreAnchorEl(null);
// };

// const handleMenuClose = () => {
//   setAnchorEl(null);
//   handleMobileMenuClose();
// };

// export const handleMobileMenuOpen = (event) => {
//   setMobileMoreAnchorEl(event.currentTarget);
// };

// const menuId = 'primary-search-account-menu';
// export const renderMenu = (
//   <Menu
//     anchorEl={anchorEl}
//     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//     id={menuId}
//     keepMounted
//     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//     open={isMenuOpen}
//     onClose={handleMenuClose}
//   >
//     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//   </Menu>
// );

// const mobileMenuId = 'primary-search-account-menu-mobile';
// export const renderMobileMenu = (
//   <Menu
//     anchorEl={mobileMoreAnchorEl}
//     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//     id={mobileMenuId}
//     keepMounted
//     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//     open={isMobileMenuOpen}
//     onClose={handleMobileMenuClose}
//   >
//     <MenuItem>
//       <IconButton aria-label="show 4 new mails" color="inherit">
//         <Badge badgeContent={4} color="secondary">
//           <MailIcon />
//         </Badge>
//       </IconButton>
//       <p>Messages</p>
//     </MenuItem>
//     <MenuItem>
//       <IconButton aria-label="show 11 new notifications" color="inherit">
//         <Badge badgeContent={11} color="secondary">
//           <NotificationsIcon />
//         </Badge>
//       </IconButton>
//       <p>Notifications</p>
//     </MenuItem>
//     <MenuItem onClick={handleProfileMenuOpen}>
//       <IconButton
//         aria-label="account of current user"
//         aria-controls="primary-search-account-menu"
//         aria-haspopup="true"
//         color="inherit"
//       >
//         <AccountCircle />
//       </IconButton>
//       <p>Profile</p>
//     </MenuItem>
//   </Menu>
// );

// // App Bar End
