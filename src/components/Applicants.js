import React, { useState, useEffect } from "react";
import { Grid, Button, Header } from "semantic-ui-react";

import Applicant from "./Applicant";
import SectionHeader from "./SectionHeader";
import getSalesForceData from '../lib/soqlMockObjects'


const Applicants = () => {
  const { applicantOne, applicantTwo } = getSalesForceData().applicants;
  const [buttonContent, setButtonContent] = useState('Hide');
 

  const passButtonContent = (buttonContent) => {
        setButtonContent(buttonContent)    
    }


  return (
    <div>
    <SectionHeader
      title={"Applicant Details"}
      passButtonContent={passButtonContent}
    />
    {buttonContent === "Show" && (
      <Grid padded>
        <Grid.Row>
          {applicantTwo !== null ? (
            <div>
              <Grid.Column width={5}>
                <Applicant
                  title="Applicant 1"
                  applicantDetails={
                    applicantOne.applicantDetails
                  }
                />
              </Grid.Column>
              <Grid.Column width={5}>
                <Applicant
                  title="Applicant 2 "
                  applicantDetails={
                    applicantTwo.applicantDetails
                  }
                />
              </Grid.Column>
            </div>
          ) :
          (
              <div>
                  <Applicant
                  title="Applicant 1 Existing mortgages"
                  applicantDetails={
                    applicantOne.applicantDetails
                  }
                />
              </div>
          )
      
      }

        </Grid.Row>
      </Grid>
    )}
  </div>
  );
};

export default Applicants;
