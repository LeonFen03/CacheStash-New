import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UploadImageTab from '../UploadImageTab/UploadImageTab';
import ViewYourImagesTab from '../ViewYourImagesTab/ViewYourImagesTab';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs variant="fullWidth" centered value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab  label="Upload-Image"/>
          <Tab  label="View your Images" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
            <UploadImageTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
            <ViewYourImagesTab />
      </CustomTabPanel>
    </Box>
  );
}