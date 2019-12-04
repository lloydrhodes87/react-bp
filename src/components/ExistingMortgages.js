import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { Grid } from "semantic-ui-react";
import getSalesForceData from "../lib/soqlMockObjects";
import ExistingMortgage from "./ExistingMortgage";

const ExistingMortgages = () => {
  const { applicantOne, applicantTwo } = getSalesForceData().applicants;

  const [buttonContent, setButtonContent] = useState("Hide");

  const passButtonContent = buttonContent => {
    setButtonContent(buttonContent);
  };

  return (
    <div>
      <SectionHeader
        title={"Existing Mortgages"}
        passButtonContent={passButtonContent}
      />
      {buttonContent === "Show" && (
        <Grid padded>
          <Grid.Row>
            {applicantTwo !== null ? (
              <div>
                <Grid.Column width={5}>
                  <ExistingMortgage
                    title="Applicant 1 Existing mortgages"
                    applicantExistingMortgage={
                      applicantOne.existingMortgageDetails
                    }
                  />
                </Grid.Column>
                <Grid.Column width={5}>
                  <ExistingMortgage
                    title="Applicant 2 Existing mortgages"
                    applicantExistingMortgage={
                      applicantTwo.existingMortgageDetails
                    }
                  />
                </Grid.Column>
              </div>
            ) :
            (
                <div>
                    <ExistingMortgage
                    title="Applicant 1 Existing mortgages"
                    applicantExistingMortgage={
                      applicantOne.existingMortgageDetails
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

export default ExistingMortgages;
