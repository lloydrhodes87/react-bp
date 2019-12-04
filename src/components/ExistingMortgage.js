import React, { useState, useEffect} from 'react';
import { Segment, Form, Header, Button } from "semantic-ui-react";
import {saveToSalesforce} from '../lib/moreUtils';

const ExistingMortgage = ({applicantExistingMortgage, title}) => {
    const [existingMortgageFormData, setFormData] = useState(applicantExistingMortgage);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...existingMortgageFormData, [name]: value });
      };

      useEffect(() => {
        const data = localStorage.getItem('existingMortgageFormData');
        if (data) {
          setFormData(JSON.parse(data))
        }       
      }, [])
    
      useEffect(() => {
        localStorage.setItem('existingMortgageFormData', JSON.stringify(existingMortgageFormData))
        
      })
      const {existingLender, currentMortgageBalance,remoPurchaseDate,currentRepaymentMethod,currentMortgagePayment, ercEndDate} = existingMortgageFormData;
    return (
        <Segment clearing>
          <Header>{title}</Header>
          <Form>
          <Form.Field>
              <label htmlFor="existingLender ">Existing Lender</label>
              <input
                onChange={handleInputChange}
                placeholder="Existing Lender"
                name="existingLender"
                value={existingLender}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="currentMortgageBalance ">Current Mortgage Balance</label>
              <input
                onChange={handleInputChange}
                placeholder="Current Mortgage Balance"
                name="currentMortgageBalance"
                value={currentMortgageBalance}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="remoPurchaseDate ">Remo Purchase Date</label>
              <input
                onChange={handleInputChange}
                placeholder="Remo Purchase Date"
                name="remoPurchaseDate"
                value={remoPurchaseDate}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="currentRepaymentMethod ">Current Repayment Method</label>
              <input
                onChange={handleInputChange}
                placeholder="Current Repayment Method"
                name="currentRepaymentMethod"
                value={currentRepaymentMethod}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="currentMortgagePayment ">Current Mortgage Payment</label>
              <input
                onChange={handleInputChange}
                placeholder="Current Mortgage Payment"
                name="currentMortgagePayment"
                value={currentMortgagePayment}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="ercEndDate">ERC End Date</label>
              <input
                onChange={handleInputChange}
                placeholder="ERC End Date"
                name="ercEndDate"
                value={ercEndDate}
              />
            </Form.Field>
            <Button content="Save" onClick={() => saveToSalesforce(existingMortgageFormData)} />
          </Form>
        </Segment>
    );
};

export default ExistingMortgage;