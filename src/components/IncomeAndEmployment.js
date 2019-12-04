import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { Grid } from "semantic-ui-react";
import getSalesForceData from "../lib/soqlMockObjects";

const IncomeAndEmployment = () => {
    const { applicantOne, applicantTwo } = getSalesForceData().applicants;
    const passButtonContent = buttonContent => {
        setButtonContent(buttonContent);
    }
    return (
        <div>
      <SectionHeader
        title={"Income and Employment"}
        passButtonContent={passButtonContent}
      />
      {buttonContent === "Show" && (
        <Grid padded>
          <Grid.Row>
            {applicantTwo !== null ? (
              <div>
                <Grid.Column width={5}>
                  <ExistingMortgage
                    title="Applicant 1 Income and Employment"
                    applicantIncomeEmployment={
                      applicantOne.IncomeAndEmployment
                    }
                  />
                </Grid.Column>
                <Grid.Column width={5}>
                  <ExistingMortgage
                    title="Applicant 2 Income and Employment"
                    applicantIncomeEmployment={
                      applicantTwo.IncomeAndEmployment
                    }
                  />
                </Grid.Column>
              </div>
            ) :
            (
                <div>
                    <ExistingMortgage
                    title="Applicant 1 Income and Employment"
                    applicantIncomeEmployment={
                      applicantOne.IncomeAndEmployment
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

export default IncomeAndEmployment;