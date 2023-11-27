import { LightningElement, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class AccConOpp extends LightningElement {
// Account section
accountName;
accPhone;
accEmail;
accAccountNumber;
industryValue;
ratingValue;
typeValue;
Revenue;
accountId;

Billingprovince;
Billingcity;
Billingstreet;
Billingcountry;

shippingprovince;
shippingcity;
shippingstreet;
shippingcountry;
description;

handleAccountName(e){
    this.accountName = e.target.value;
}

handlePhone(e){
    this.accPhone = e.target.value;
}
handleEmail(e){
    this.accEmail = e.target.value;
}
handleAccountNumber(e){
    this.accAccountNumber = e.target.value;
}

handleIndustry(e){
    this.industryValue = e.target.value;
}

handleType(e){
    this.typeValue = e.target.value;
}
handleRating(e){
    this.ratingValue = e.target.value;
}
handleRevenue(e){
this.Revenue = e.target.value;
}
handleBillingAddress(e){
    this.Billingcountry = e.target.country;
        this.Billingstreet = e.target.street;
        this.Billingcity = e.target.city;
        this.Billingprovince = e.target.province;

}
handleShippingAddress(e){
    this.shippingprovince = e.target.province;
    this.shippingcity = e.target.city;
    this.shippingstreet = e.target.street;
    this.shippingcountry = e.target.country;
}
handleDescription(e){
    this.description = e.target.value;
}
    
// contact section


        firstName;
        middleName;
        lastName;
        salutation;
        ConPhone;
        leadSource;
        otherPhone;
        conFax;
        mailingAddress;
        otherAddress;
        conDescription;
        dateOfBirth;
        assistantName;
        assPhone;
        conEmail;
        otherprovince;
        othercity;
        otherstreet;
        othercountry;

        mailingprovince;
        mailingcity;
        mailingstreet;
        mailingcountry;

    salutationsList = [
        { label: 'Mr.', value: 'Mr.' },
        { label: 'Ms.', value: 'Ms.' },
        { label: 'Mrs.', value: 'Mrs.' },
        { label: 'Dr.', value: 'Dr.' },
        { label: 'Prof.', value: 'Prof.' },
    ];

    fieldsList = ['firstName', 'lastName','salutation'];

    get salutationOptions() {
        return this.salutationsList;
    }

    get fields() {
        return this.fieldsList;
    }
     
     handleName(event) {
        this.firstname = event.target.firstName;
        this.middleName = event.target.middleName;
        this.lastName = event.target.lastName;
        this.salutation = event.target.salutation;
    }

    handleConPhone(e){
        this.ConPhone = e.target.value;
    }
    handelLeadSource(e){
        this.leadSource = e.target.value;
    }
    handleBirthDate(e){
        this.dateOfBirth = e.target.value;
    }
    handleAss(e){
        this.assistantName = e.target.value;
    }
    handleAssPhone(e){
        this.assPhone = e.target.value;
    }
    handleOtherPhone(e){
        this.otherPhone = e.target.value;
    }
    handleFax(e){
        this.conFax = e.target.value;
    }
    handleMailingAddress(e){
        this.mailingprovince = e.target.province;
        this.mailingcity = e.target.city;
        this.mailingstreet = e.target.street;
        this.mailingcountry = e.target.country;
    }
    handleOtherAddress(e){
        this.otherprovince = e.target.province;
        this.othercity = e.target.city;
        this.otherstreet = e.target.street;
        this.othercountry = e.target.country;
    }
    handleConDescription(e){
        this.conDescription = e.target.value;
    }
    handleConEmail(e){
        this.conEmail = e.target.value;
    }

    // opportunity section

        oppOtherLeadSource;
        oppOtherReasonForLost;
        oppLeadSource;
        oppReasonForLost;
        oppFax;
        oppEmail;
        oppRemarks;
        oppStage;
        oppCloseDate;
        oppLeadSource;
        contactId;

    handleOtherLeadSource(e){
        this.oppOtherLeadSource = e.target.value;
    }
    handleOtherReasonForLost(e){
        this.oppReasonForLost = e.target.value;
    }
    handleLeadSource(e){
        this.leadSource = e.target.value;
    }
    handleReasonForLost(e){
        this.oppReasonForLost = e.target.value;
    }
    handleOppFax(e){
        this.oppFax = e.target.value;
    }
    handleOppEmail(e){
        this.oppEmail = e.target.value;
    }
    handleRemarks(e){
        this.oppRemarks = e.target.value;
    }
    handleStage(e){
        this.oppStage = e.target.value;
    }
    handleCloseDate(e){
        this.oppCloseDate = e.target.value; 
    }
    handelOppLeadSource(e){
        this.leadSource = e.target.value;
    }

    
    



    handleClick(){
    const accountfields = {"Name":this.accountName,
                            "Phone":this.accPhone,
                            "AccountNumber":this.accAccountNumber,
                            "Industry":this.industryValue,
                            "Type":this.typeValue,
                            "Rating":this.ratingValue,
                            "AnnualRevenue":this.Revenue,
                            "Description":this.description}

    const contactFileds = {"AccountId":this.accountId,
                            "Salutation":this.salutation,
                            "FirstName":this.firstName,
                            "LastName":this.lastName,
                            "Phone":this.ConPhone,
                            "Email":this.conEmail,
                            "OtherPhone":this.otherPhone,
                            "AssistantPhone":this.assPhone,
                            "Birthdate":this.dateOfBirth,
                            "AssistantName":this.assistantName,
                            "LeadSource":this.leadSource,
                            "Description":this.conDescription,
                            "Fax":this.conFax
    }

    const opportunityFields = {
                                "Account__c":this.accountId,
                                "Stage__c":this.oppStage,
                                "Remarks__c":this.oppRemarks,
                                "Reason_For_Lost__c":this.oppReasonForLost,
                                "Other_Reason_For_Lost__c":this.Other_Reason_For_Lost__c,
                                "Other_Lead_Source__c":this.oppOtherLeadSource,
                                "Lead_Source__c":this.leadSource,
                                "Email__c":this.oppEmail,
                                "Contact__c":this.contactId,
                                "Close_Date__c":this.oppCloseDate}

    const accountRecordDetails = {apiName:"Account",fields:accountfields};
    const contacttRecordDetails = {apiName:"Contact",fields:contactFileds};
    const opportunityDetails = {apiName:"Opportunity_custom__c",fields:opportunityFields}
    


    createRecord(accountRecordDetails).then(x=>{
        const accRec = new ShowToastEvent({
            title: 'Account Record created',
            message: 'New Account record created and Id is: '+x.id,
            variant: 'success'
          });
          this.dispatchEvent(accRec);
        this.accountId = x.id;

        createRecord(contacttRecordDetails).then(con=>{
            this.accountId = x.id;
            console.log(JSON.stringify("Account ID FROM Contact ==>"+ this.accountId));
            const accRec = new ShowToastEvent({
                title: 'Contact Record created',
                message: 'New Contact record created and Id is: '+con.id,
                variant: 'success'
              });
              this.dispatchEvent(accRec);
            this.contactId = con.id;
            
            console.log(JSON.stringify("Account ID ==>"+this.accountId));
            createRecord(opportunityDetails).then(opp =>{
                const accRec = new ShowToastEvent({
                    title: 'Opportunity Record created',
                    message: 'New Opportunity record created and Id is: '+opp.id,
                    variant: 'success'
                  });
                  this.dispatchEvent(accRec);
                  
            }).catch(oppErro =>{
                const evt = new ShowToastEvent({
                    title: 'Unable to create Account record '+oppErro,
                    message: 'Can not create record',
                    variant: 'error'
                  });
                  this.dispatchEvent(evt);
                  console.log(JSON.stringify(oppErro));
            })
        }).catch(conErro =>{

            const evt = new ShowToastEvent({
                title: 'Unable to create Contact record '+conErro,
                message: 'Can not create record',
                variant: 'error'
              });
              this.dispatchEvent(evt);
        })
    }).catch(accErr=>{
        const evt = new ShowToastEvent({
            title: 'Unable to create opportunity record '+ accErr,
            message: 'Can not create record',
            variant: 'error'
          });
          this.dispatchEvent(evt);
    })

    }
}
