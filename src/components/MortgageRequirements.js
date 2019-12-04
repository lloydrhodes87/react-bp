import React, { useState, useEffect } from "react";
import { Button, Header, Grid, Segment, Form } from "semantic-ui-react";
import SectionHeader from "./SectionHeader";
import getSalesForceData from "../lib/soqlMockObjects";
import {saveToSalesforce} from '../lib/moreUtils';

const MortgageRequirements = () => {
  const { mortgageRequirements } = getSalesForceData();

  const [buttonContent, setButtonContent] = useState("Hide");
  const [mortgageRequirementsFormData, setFormData] = useState(
    mortgageRequirements
  );

  const passButtonContent = buttonContent => {
    setButtonContent(buttonContent);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...mortgageRequirementsFormData, [name]: value });
  };

  useEffect(() => {
    const data = localStorage.getItem('mortgageRequirementsFormData');
    if (data) {
      setFormData(JSON.parse(data))
    }       
  }, [])

  useEffect(() => {
    localStorage.setItem('mortgageRequirementsFormData', JSON.stringify(mortgageRequirementsFormData))
    
  })

  const {
    recordType,
    ltv,
    opportunityStatus,
    term,
    firstTimeBuyer,
    purchasePrice,
    propertyValue,
    deposit,
    equity,
    isMortgage,
    recommendedLender,
    recomendedProduct,
    additionalBorrowingAmmount,
    loanAmount,
    loanAmountTwo,
    sourceOfDeposit,
    additionalBorrowingReason,
    anticipatedRentalIncome
  } = mortgageRequirementsFormData;

  return (
    <div>
      <SectionHeader
        title={"Mortgage Requirements"}
        passButtonContent={passButtonContent}
      />
      {buttonContent === "Show" && (
        <Segment clearing>
          <Form>
            <Form.Field>
              <label htmlFor="firstTimeBuyer ">First Time Buyer</label>
              <input
                onChange={handleInputChange}
                placeholder="First time buyer"
                name="firstTimeBuyer"
                value={firstTimeBuyer}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="recordType">Record Type</label>
              <input
                onChange={handleInputChange}
                placeholder="Record Type"
                name="recordType"
                value={recordType}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="ltv">LTV</label>
              <input
                onChange={handleInputChange}
                placeholder="LTV"
                name="ltv"
                value={ltv}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="opportunityStatus">Opportunity Status</label>
              <input
                onChange={handleInputChange}
                placeholder="Opportunity Status"
                name="opportunityStatus"
                value={opportunityStatus}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="term">Term</label>
              <input
                onChange={handleInputChange}
                placeholder="Term"
                name="term"
                value={term}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="purchasePrice">Purchase Price</label>
              <input
                onChange={handleInputChange}
                placeholder="Purchase Price"
                name="purchasePrice"
                value={purchasePrice}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="propertyValue">Property Value</label>
              <input
                onChange={handleInputChange}
                placeholder="Property Value"
                name="propertyValue"
                value={propertyValue}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="deposit">Deposit</label>
              <input
                onChange={handleInputChange}
                placeholder="Deposit"
                name="deposit"
                value={deposit}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="equity">Equity</label>
              <input
                onChange={handleInputChange}
                placeholder="Equity"
                name="equity"
                value={equity}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="isMortgage">Is Mortgage</label>
              <input
                onChange={handleInputChange}
                placeholder="Is Mortgage"
                name="isMortgage"
                value={isMortgage}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="recommendedLender">Recommended Lender</label>
              <input
                onChange={handleInputChange}
                placeholder="Recommended Lender"
                name="recommendedLender"
                value={recommendedLender}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="recomendedProduct">Recomended Product</label>
              <input
                onChange={handleInputChange}
                placeholder="Recomended Product"
                name="recomendedProduct"
                value={recomendedProduct}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="additionalBorrowingAmmount">
                Additional Borrowing Ammount
              </label>
              <input
                onChange={handleInputChange}
                placeholder="Additional Borrowing Ammount"
                name="additionalBorrowingAmmount"
                value={additionalBorrowingAmmount}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="loanAmount">Loan Amount</label>
              <input
                onChange={handleInputChange}
                placeholder="Loan Amount"
                name="loanAmount"
                value={loanAmount}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="loanAmountTwo">Loan Amount Two</label>
              <input
                onChange={handleInputChange}
                placeholder="Loan Amount Two"
                name="loanAmountTwo"
                value={loanAmountTwo}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="sourceOfDeposit">Source Of Deposit</label>
              <input
                onChange={handleInputChange}
                placeholder="Source Of Deposit"
                name="sourceOfDeposit"
                value={sourceOfDeposit}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="additionalBorrowingReason">
                Additional Borrowing Reason
              </label>
              <input
                onChange={handleInputChange}
                placeholder="Additional Borrowing Reason"
                name="additionalBorrowingReason"
                value={additionalBorrowingReason}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="anticipatedRentalIncome">
                Anticipated Rental Income
              </label>
              <input
                onChange={handleInputChange}
                placeholder="Anticipated Rental Income"
                name="anticipatedRentalIncome"
                value={anticipatedRentalIncome}
              />
            </Form.Field>
            <Button content="Save" onClick={() => saveToSalesforce(mortgageRequirementsFormData)} />
          </Form>
        </Segment>
      )}
    </div>
  );
};

export default MortgageRequirements;
