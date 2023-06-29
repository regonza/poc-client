import {
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
  IconButton,
  Typography,
  ListItemButton
} from "@mui/material/";
import {
  CheckBoxOutlineBlankOutlined,
  DraftsOutlined,
  HomeOutlined,
  InboxOutlined,
  MailOutline,
  ReceiptOutlined,
  Menu
} from "@mui/icons-material/";
import Form from './components/Form';
import SimpleForm from './components/SimpleForm';
import { useState } from "react";

const data = [
  {
    name: "Crear Intent",
    icon: <HomeOutlined />,
  },
  { name: "Inbox", icon: <InboxOutlined />, data: <Form/> },
  { name: "Outbox", icon: <CheckBoxOutlineBlankOutlined />, data: <Form/> },
  { name: "Sent mail", icon: <MailOutline />, data: <Form/> },
  { name: "Draft", icon: <DraftsOutlined />, data: <Form/> },
  { name: "Trash", icon: <ReceiptOutlined />, data: <Form/> },
];

function App() {
  const [open, setOpen] = useState(false);

  const getList = () => (
    <div>
      {data.map((item, index) => (
        <ListItem key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} style={{color: '#ffff'}}/>
        </ListItem>
      ))}
    </div>
  );
  return (
    <div className="App">
      <div className="appBar">
      <Toolbar>
        <IconButton>
          <Menu onClick={() => setOpen(true)}/>
          <Drawer 
            open={open} 
            anchor={"left"} 
            onClose={() => setOpen(false)}
          >
            {getList()}
            <Divider />
            {getList()}
          </Drawer>
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontFamily:'Montserrat, sans-serif', fontWeight:100 }}>
          {"notFkgCMS"}
        </Typography>
      </Toolbar>
      </div>
      <div className='body'>
        <SimpleForm />
      </div>
    </div>
  );
}

export default App;
