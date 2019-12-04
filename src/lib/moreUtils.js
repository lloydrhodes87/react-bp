import {getSFAuth }from '../lib/utils';

export const saveToSalesforce = async(object) => {
  // const salesForceAuth = await getSFAuth();
  // const { instance_url, access_token } = salesForceAuth;

  // const info = {
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${access_token}`
  //     }
  // };

  // try {
  //     let res = await axios.post(`${instance_url}/services/data/v42.0/sobjects/Ancillary_Product__c/`, createQuote, info);
  //     console.log('successfully posted to salesforce', res.data, createQuote)
  // } catch (error) {
  //     console.log('error posting to salesforce', JSON.stringify(error));
  //     throw error;
  // }
    console.log('saving to salesforce', object)
  }
