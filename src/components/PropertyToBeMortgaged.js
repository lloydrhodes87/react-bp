import React, { useState, useEffect } from "react";
import { Button, Header, Grid, Segment, Form } from "semantic-ui-react";
import SectionHeader from "./SectionHeader";
import getSalesForceData from "../lib/soqlMockObjects";
import { saveToSalesforce } from "../lib/moreUtils";

const PropertyToBeMortgaged = () => {
  const { propertyToBeMortgaged } = getSalesForceData();

  const [buttonContent, setButtonContent] = useState("Hide");
  const [propToBeMortgagedFormData, setFormData] = useState(propertyToBeMortgaged);
  
  const passButtonContent = buttonContent => {
    setButtonContent(buttonContent);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({ ...propToBeMortgagedFormData, [name]: value });
  };

  useEffect(() => {
    const data = localStorage.getItem("propToBeMortgagedFormData");
    console.log(data)
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
      console.log(propToBeMortgagedFormData)
    localStorage.setItem(
      "propToBeMortgagedFormData",
      JSON.stringify(propToBeMortgagedFormData)
    );
  });

  const {
    firstLineOfAddress,
    isCarParkingGarage,
    town,
    country,
    houseType,
    postcode,
    tenureLeaseRemaining,
    newBuild,
    groundRent,
    selfBuildProject,
    bedrooms,
    overTen,
    kitchens,
    numOfBathrooms,
    unusualFeatures,
    numberOfReceptionRooms,
    unusualDescription,
    btlMonthlyRentalIncome,
    sharedEquity,
    serviceCharge,
    scheme,
    serviceChargeAmount,
    exLocalAuthority,
    isSharedOwnership,
    rightToBuy,
    sharedOwned,
    builderVendorDeposit,
    sharedRentPaid,
    builderVendorDepositAmount,
    sharedHATTrust
  } = propToBeMortgagedFormData;
  return (
    <div>
      <SectionHeader
        title={"Property to be Mortgaged"}
        passButtonContent={passButtonContent}
      />
      {buttonContent === "Show" && (
        <Segment clearing>
          <Form>
            <Form.Field>
              <label htmlFor="firstLineOfAddress">First Line Of Address</label>
              <input
                onChange={handleInputChange}
                placeholder="First Line Of Address"
                name="firstLineOfAddress"
                value={firstLineOfAddress}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="isCarParkingGarage">Is Car Parking Garage</label>
              <input
                onChange={handleInputChange}
                placeholder="Is Car Parking Garage"
                name="isCarParkingGarage"
                value={isCarParkingGarage}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="town">Town</label>
              <input
                onChange={handleInputChange}
                placeholder="Town"
                name="town"
                value={town}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="country">Country</label>
              <input
                onChange={handleInputChange}
                placeholder="Country"
                name="country"
                value={country}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="houseType">House Type</label>
              <input
                onChange={handleInputChange}
                placeholder="House Type"
                name="houseType"
                value={houseType}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="postcode">Postcode</label>
              <input
                onChange={handleInputChange}
                placeholder="Postcode"
                name="postcode"
                value={postcode}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="tenureLeaseRemaining">Tenure Lease Remaining</label>
              <input
                onChange={handleInputChange}
                placeholder="Tenure Lease Remaining"
                name="tenureLeaseRemaining"
                value={tenureLeaseRemaining}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="newBuild">New Build</label>
              <input
                onChange={handleInputChange}
                placeholder="New Build"
                name="newBuild"
                value={newBuild}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="groundRent">Ground Rent</label>
              <input
                onChange={handleInputChange}
                placeholder="Ground Rent"
                name="groundRent"
                value={groundRent}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="selfBuildProject">Self Build Project</label>
              <input
                onChange={handleInputChange}
                placeholder="Self Build Project"
                name="selfBuildProject"
                value={selfBuildProject}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="bedrooms">Bedrooms</label>
              <input
                onChange={handleInputChange}
                placeholder="Bedrooms"
                name="bedrooms"
                value={bedrooms}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="overTen">Over Ten</label>
              <input
                onChange={handleInputChange}
                placeholder="Over Ten"
                name="overTen"
                value={overTen}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="kitchens">Kitchens</label>
              <input
                onChange={handleInputChange}
                placeholder="Kitchens"
                name="kitchens"
                value={kitchens}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="numOfBathrooms">Number Of Bathrooms</label>
              <input
                onChange={handleInputChange}
                placeholder="Number Of Bathrooms"
                name="numOfBathrooms"
                value={numOfBathrooms}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="unusualFeatures">Unusual Features</label>
              <input
                onChange={handleInputChange}
                placeholder="Unusual Features"
                name="unusualFeatures"
                value={unusualFeatures}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="numberOfReceptionRooms">Number Of Reception Rooms</label>
              <input
                onChange={handleInputChange}
                placeholder="Number Of Reception Rooms"
                name="numberOfReceptionRooms"
                value={numberOfReceptionRooms}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="unusualDescription">Unusual Description</label>
              <input
                onChange={handleInputChange}
                placeholder="Unusual Description"
                name="unusualDescription"
                value={unusualDescription}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="btlMonthlyRentalIncome">BTL Monthly Rental Income</label>
              <input
                onChange={handleInputChange}
                placeholder="BTL Monthly Rental Income"
                name="btlMonthlyRentalIncome"
                value={btlMonthlyRentalIncome}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="sharedEquity">Shared Equity</label>
              <input
                onChange={handleInputChange}
                placeholder="Shared Equity"
                name="sharedEquity"
                value={sharedEquity}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="serviceCharge">Service Charge</label>
              <input
                onChange={handleInputChange}
                placeholder="Service Charge"
                name="serviceCharge"
                value={serviceCharge}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="scheme">Scheme</label>
              <input
                onChange={handleInputChange}
                placeholder="Scheme"
                name="scheme"
                value={scheme}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="serviceChargeAmount">Service Charge Amount</label>
              <input
                onChange={handleInputChange}
                placeholder="Service Charge Amount"
                name="serviceChargeAmount"
                value={serviceChargeAmount}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="exLocalAuthority">Ex Local Authority</label>
              <input
                onChange={handleInputChange}
                placeholder="Ex Local Authority"
                name="exLocalAuthority"
                value={exLocalAuthority}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="isSharedOwnership">Is Shared Ownership</label>
              <input
                onChange={handleInputChange}
                placeholder="Is Shared fOwnership"
                name="isSharedOwnership"
                value={isSharedOwnership}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="rightToBuy">Right To Buy</label>
              <input
                onChange={handleInputChange}
                placeholder="Right To Buy"
                name="rightToBuy"
                value={rightToBuy}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="sharedOwned">Shared Owned</label>
              <input
                onChange={handleInputChange}
                placeholder="Shared Owned"
                name="sharedOwned"
                value={sharedOwned}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="builderVendorDeposit">Builder Vendor Deposit</label>
              <input
                onChange={handleInputChange}
                placeholder="Builder Vendor Deposit"
                name="builderVendorDeposit"
                value={builderVendorDeposit}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="sharedRentPaid">Shared Rent Paid</label>
              <input
                onChange={handleInputChange}
                placeholder="Shared Rent Paid"
                name="sharedRentPaid"
                value={sharedRentPaid}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="builderVendorDepositAmount">Builder Vendor Deposit Amount</label>
              <input
                onChange={handleInputChange}
                placeholder="Builder Vendor Deposit Amount"
                name="builderVendorDepositAmount"
                value={builderVendorDepositAmount}
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="sharedHATTrust">Shared HAT Trust</label>
              <input
                onChange={handleInputChange}
                placeholder="shared HAT Trust"
                name="sharedHATTrust"
                value={sharedHATTrust}
              />
            </Form.Field>
            
            <Button content="Save" onClick={() => saveToSalesforce(propToBeMortgagedFormData)} />
          </Form>
        </Segment>
      )}
    </div>
  );;
};

export default PropertyToBeMortgaged;
