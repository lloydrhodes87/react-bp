const executeSOQL  = require('./utils')

const opportunityQuery = `SELECT First_Line_address__c, Town__c, Loan_type__c, Country__c, Postcode__c, Construction_type__c, Roof_type__c, Property_type__c, House_type__c, Flat_type__c, New_build__c, Buy_To_Let_Multiple_Occupancy__c, Utm_source__c, Utm_medium__c, Utm_campaign__c, Utm_term__c, Analyticsref__c, Occupancy_Status__c, BTL_Monthly_Rental_Income__c, AdditionalBorrowing_amount__c, Term__c, Preferred_repayment__c, Property_Value__c, Purchase_Price__c, Landlord_Type__c, Is_Remortgage_A_Buy_To_Let__c, Deposit_Deposit__c, Date_Closed__c, Id FROM Opportunity WHERE Id = '${opportunityId}'`

const applicantQuery = `SELECT Lead_applicant__c, Id, First_name__c, Last_name__c, Email_address__c, Mobile_phone_number__c, Home_phone_number__c, Nationality__c, Marital_Status__c, Salutation__c, DOB__c, First_line_of__c, town__c, Move_In_Date__c, Postcode__c FROM Applicant__c WHERE Opportunity__c = '${opportunityId}'`

const [ opportunityData, applicantData ] = await Promise.all([executeSOQL(opportunityQuery, sfAuth), executeSOQL(applicantQuery, sfAuth)]).catch(err => {console.log('soql error: opportunity/applicant/mortgage query'); throw(err)});

const leadApplicantData = applicantData.records.filter(applicant => applicant.Lead_applicant__c === 'Yes')[0]
const secondApplicantData = applicantData.records.length > 1 ? applicantData.records.filter(applicant => applicant.Lead_applicant__c !== 'Yes')[0] : null

// get all employment objects for an applicant
// for each employment object get each child object
// in each child object get name, freqency, amount

const employmentsAppOneQuery = `SELECT Employment_Status__c, Annual_PreTax_Salary__c, contractor_paymentamount__c, director_salary__c, llp_drawings__c, st_Total_Net_Income__c FROM Income_Employment__c WHERE Applicant__c = '${leadApplicantData.Id}'`
const employmentsAppTwoQuery  = secondApplicantData !== null ? `SELECT Employment_Status__c, Annual_PreTax_Salary__c, contractor_paymentamount__c, director_salary__c, llp_drawings__c, st_Total_Net_Income__c FROM Income_Employment__c WHERE Applicant__c = '${secondApplicantData.Id}'` : null;

let employmentAppOne, employmentAppTwo = null;
    employmentsAppTwoQuery !== null ? 
        [ employmentAppOne, employmentAppTwo ] = await Promise.all([executeSOQL(employmentsAppOneQuery, sfAuth), executeSOQL(employmentsAppTwoQuery, sfAuth)]).catch(err => { console.log('soql error: employment joint query'); throw(err)}) : 
        employmentAppOne = await executeSOQL(employmentsAppOneQuery, sfAuth).catch(err => {console.log('soql error: employment single query'); throw(err)});

const opportunityData = [{}];

const leadApplicantData = [{ firstName: "Lloyd", secondName: "Rhodes" }];
const secondApplicantData = null;
      
const employmentObject = {
    employmentStatus: 'Permanent Employment'
}
      
const selfEmploymentObject = {
    llc: {},
    soleTrader: {},
    partner: {},
    director: {}
}
      
const otherIncomeObject = {
    pension: {}
}