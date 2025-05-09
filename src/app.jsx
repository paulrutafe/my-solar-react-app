import React, { useState } from "react";
import { Button, Container, Typography, Switch } from "@mui/material";

const App = () => {
  const [applianceStatus, setApplianceStatus] = useState({
    light: false,
    fan: false,
  });

  const toggleAppliance = (name) => {
    setApplianceStatus((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  return (
    <Container>
      <Typography variant="h4">Solar Energy Management</Typography>

      <Typography variant="h6">Control Home Appliances</Typography>
      <div>
        <label>Light</label>
        <Switch checked={applianceStatus.light} onChange={() => toggleAppliance("light")} />
      </div>
      <div>
        <label>Fan</label>
        <Switch checked={applianceStatus.fan} onChange={() => toggleAppliance("fan")} />
      </div>

      <Button
        variant="contained"
        color="primary"
        onClick={() => alert("Energy data synced!")}
      >
        Sync Data
      </Button>
    </Container>
  );
};

export default App;
