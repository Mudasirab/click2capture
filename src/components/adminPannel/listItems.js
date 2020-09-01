import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import TableChartIcon from '@material-ui/icons/TableChart';
import { NavLink } from "react-router-dom";
export const mainListItems = (
    <div align="center">
        <NavLink to="/acc/ad_min/dashboard/main"> <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        </NavLink>
        <NavLink to="/acc/ad_min/dashboard/Dashboard/uploadPhotos"><ListItem button>
            <ListItemIcon>
                <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Photo Uploads" />
        </ListItem>
        </NavLink>
        <NavLink to="/acc/ad_min/dashboard/Dashboard/UserProfiles"><ListItem button>
            <ListItemIcon>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItem>
        </NavLink>
    </div>
);
