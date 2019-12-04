import React, { useState, useEffect} from "react";
import { Button, Header, Grid } from 'semantic-ui-react'

const SectionHeader = ({title, passButtonContent}) => {
  const [buttonContent, setButtonContent] = useState('Show');
  const handleSetButtonContent = buttonContent => {
    
    if (buttonContent === "Show") setButtonContent("Hide");
    if (buttonContent === "Hide") setButtonContent("Show");

    passButtonContent(buttonContent)
    
  };
  return (
    <Grid padded>
      <Grid.Column width={3}>
        <Header as="h3">{title}</Header>
      </Grid.Column>
      <Grid.Column width={5}>
        <Button
          content={buttonContent}
          onClick={() => { handleSetButtonContent(buttonContent)}}
        />
      </Grid.Column>
    </Grid>
  );
};

export default SectionHeader;
