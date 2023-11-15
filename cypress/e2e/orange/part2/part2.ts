import {Before, Given, When, Then, AfterAll } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../support/page-objects/login-page/login-page";
import "../../../support/API/utills/utills-page";
import EmployeeHelper from "../../../support/helpers/add-employee-helper";
import AddJopHelper from  '../../../support/helpers/add-job-helper';
import VacancieHelper from  '../../../support/helpers/add-vacancies';
import CandidateHelper from "../../../support/helpers/add-candidates-helper";
import shortlistCandidateHelper from "../../../support/helpers/update-shoetlistcandidate-helper";
import sheduleinterviewHelper from "../../../support/helpers/shedule-interview-helper";
import CandidatePage from "../../../support/page-objects/ui-page/ui-candidate";


const loginObj = new LoginPage();
const employeeUser = new EmployeeHelper();
const myJop : AddJopHelper=new AddJopHelper();
const myVacancie : VacancieHelper=new VacancieHelper();
const myCandidate:CandidateHelper=new CandidateHelper();
const myShortlistCandidate:shortlistCandidateHelper=new shortlistCandidateHelper();
const mysheduleinterview:sheduleinterviewHelper=new sheduleinterviewHelper();
const candidatestatus:CandidatePage=new CandidatePage();



let employeeId:any;
let id:any;
let empNumber:any;
let firstname:any;
let middlename:any;
let lastname:any;
let candidateid:any;
let vacancyId:any;

Given('I navigate to the site and log in', () => {
   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   loginObj.login("Admin","admin123");
});

Given('create empolyee and jop title', () => {
    employeeUser.CreateEmployee().then((res)=>{

        employeeId=res.body.data.employeeId;
        empNumber=res.body.data.empNumber;
        firstname=res.body.data.firstName;
        middlename=res.body.data.middleName;
        lastname=res.body.data.lastName
        cy.log(employeeId);
        myJop.addNewJopViaAPI().then((resp)=>{
        id=resp.data.id;
 });
})
})


Given('Prepare the candidate needs until it has “Application Initiated” status', () => {
    myVacancie.CreateVacancie(empNumber,id).then((res)=>{
         vacancyId=res.data.id
        cy.log(vacancyId)
        myCandidate.addNewCandidateViaAPI(vacancyId).then((res)=>{
             candidateid=res.data.id;
            
})
})
})

When('Upload File To Candidat', () => {

    candidatestatus.uploadFileToCandidate(candidateid);
    candidatestatus.downloadFile();
  });
 
 
 Then('uploaded file should contain the same data as was uploaded', () => {
     //candidatestatus.assertionpassed();
     candidatestatus.asertion()
 });

Given('Prepare the candidate needs until it has “Hired” status', () => {
    myVacancie.CreateVacancie(empNumber,id).then((res)=>{
        let vacancyId=res.data.id
        cy.log(vacancyId)
        myCandidate.addNewCandidateViaAPI(vacancyId).then((res)=>{
        candidateid=res.data.id;
        myShortlistCandidate.addNewCandidateViaAPI(candidateid)
        mysheduleinterview.addNewCandidateViaAPI(candidateid,firstname,middlename,lastname,empNumber)
        candidatestatus.InterviewPassed(candidateid);
        candidatestatus.JobOfferedStatuse();
        candidatestatus.HiredStatus();

})
})
})

 
AfterAll(()=>{
   employeeUser.deleteemployee(empNumber);
   myJop.deleteCreatedJop();
   myVacancie.deleteVacancie(vacancyId);
   myCandidate.deleteCandidate(candidateid);
})
