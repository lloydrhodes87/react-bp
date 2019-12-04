const getSalesForceData = () => {
  const secondApplicantData = null;

  return {
    mortgageRequirements: {
      recordType: "",
      ltv: "",
      opportunityStatus: "",
      term: 35,
      firstTimeBuyer: "Yes",
      purchasePrice: 200000,
      propertyValue: "",
      deposit: 50000,
      equity: "",
      isMortgage: "",
      recommendedLender: "",
      recomendedProduct: "",
      additionalBorrowingAmmount: "",
      loanAmount: "",
      loanAmountTwo: "",
      sourceOfDeposit: "Equity",
      additionalBorrowingReason: "",
      anticipatedRentalIncome: ""
    },
    propertyToBeMortgaged: {
      firstLineOfAddress: "32 shrigley",
      isCarParkingGarage: "",
      town: "",
      country: "",
      houseType: "",
      postcode: "",
      tenureLeaseRemaining: "",
      newBuild: "",
      groundRend: "",
      selfBuildProject: "",
      bedrooms: "",
      overTen: "",
      kitchens: "",
      numOfBathrooms: "",
      unusualFeatures: "",
      numberOfReceptionRooms: "",
      unusualDescription: "",
      btlMonthlyRentalIncome: "",
      sharedEquity: "",
      serviceCharge: "",
      scheme: "",
      serviceChargeAmount: "",
      exLocalAuthority: "",
      isSharedOwnership: "",
      rightToBuy: "",
      sharedOwned: "",
      builderVendorDeposit: "",
      sharedRentPaid: "",
      builderVendorDepositAmount: "",
      sharedHATTrust: ""
    },
    applicants: {
      applicantOne: {
        applicantDetails: {
          salutation: "Mr",
          firstName: "Lloyd",
          middleName: "",
          secondName: "Rhodes",
          maidenName: "",
          otherNames: "",
          birthDate: "",
          mobileNum: "",
          homeNum: "",
          email: "",
          gender: "",
          nationality: "",
          maritalStatus: "",
          nationalInsurance: "",
          retirementAge: "",
          electoralRole: "",
          criminalConvictions: ""
        },
        existingMortgageDetails: {
          existingLender: "HSBC",
          currentMortgageBalance: 27000,
          remoPurchaseDate: "",
          currentRepaymentMethod: "",
          currentMortgagePayment: "",
          ercEndDate: ""
        },
        incomeAndEmployment: {
          employed: [],
          selfEmployed: [],
          otherIncome: []
        }
      },
      applicantTwo:
        secondApplicantData !== null
          ? {
              applicantDetails: {
                salutation: "",
                firstName: "",
                middleName: "",
                secondName: "",
                maidenName: "",
                otherNames: "",
                birthDate: "",
                mobileNum: "",
                homeNum: "",
                email: "",
                gender: "",
                nationality: "",
                maritalStatus: "",
                nationalInsurance: "",
                retirementAge: "",
                electoralRole: "",
                criminalConvictions: ""
              },

              existingMortgageDetails: {
                existingLender: "",
                currentMortgageBalance: "",
                remoPurchaseDate: "",
                currentRepaymentMethod: "",
                currentMortgagePayment: "",
                ercEndDate: ""
              },
              incomeAndEmployment: {
                
              }
            }
          : null
    }
  };
};

module.exports = getSalesForceData;
