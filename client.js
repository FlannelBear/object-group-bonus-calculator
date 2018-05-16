const atticus = { name: 'Atticus', employeeNumber: '2405', annualSalary: '47000', reviewRating: 3 };
const jem = { name: 'Jem', employeeNumber: '62347', annualSalary: '63500', reviewRating: 4 };
const scout = { name: 'Scout', employeeNumber: '6243', annualSalary: '74750', reviewRating: 5 };
const robert = { name: 'Robert', employeeNumber: '26835', annualSalary: '66000', reviewRating: 1 };
const mayella = { name: 'Mayella', employeeNumber: '89068', annualSalary: '35000', reviewRating: 2 };

const employees = [ atticus, jem, scout, robert, mayella ];

class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

$(document).ready(setup);

function setup(){
  $('#run').on('click', run).on('click', function(){
   $('#run').css('visibility', 'hidden');
  });
}

console.log( employees );

function createEmployee(employee){
  employee = new Employee(employee.name, employee.employeeNumber, employee.annualSalary, employee.reviewRating);
  employee.bonusPercent = calculateBonusPercent(employee);
  employee.totalCompensation = Math.round(parseInt(employee.annualSalary) + calculateBonus(employee)); // outputting concat string, not real solution
  employee.totalBonus = Math.round(calculateBonus(employee));
  return employee;            
    } // end eList

function run(){
  for(employee of employees){
      let a = createEmployee(employee);
      console.log(`This is`, a);
      $('.employeeList').append(`<li class="employee">This is ${a.name}. Employee number: ${a.employeeNumber}, Annual Salary: ${a.annualSalary}, Review Rating: ${a.reviewRating}, Bonus Percent: ${a.bonusPercent * 100}%, Total Bonus: ${a.totalBonus}, Total Compensation: ${a.totalCompensation}.</li>`);
      $('.employee').css('color', 'white').css('line-height', '50px').css('font-family', 'monospace').css('font-size', '15px');
      }
    }
// for( let i = 0; i < employees.length; i++ ){
//   let employee = createEmployee(employees[i]);
//   console.log(`This is`, employee);
// } // end employees iterating

function calculateBonusPercent(employee){
  let bonusPercent = 0;
  if( employee.reviewRating <= 2 ){
    bonusPercent = 0;
  } else if( employee.reviewRating == 3 ){
    bonusPercent = 0.04;
  } else if( employee.reviewRating == 4 ){
    bonusPercent = 0.06;
  } else if( employee.reviewRating == 5 ){
    bonusPercent = 0.1;
  }

  return bonusPercent;
} // end bonusPercent

function calculateBonus(employee){
  let bonusPercent = calculateBonusPercent(employee);
  let bonus = employee.annualSalary * bonusPercent;

  if(employee.employeeNumber.length == 4 ){
    bonus += bonus * 0.05;
  }
  
  if(parseInt(employee.annualSalary) > 65000){
    bonus -= bonus * 0.01;
  }

  if(bonus > employee.annualSalary * 0.13){
    bonus = employee.annualSalary * 0.13;
  }

  if(bonus < 0){
    bonus = 0;
  }

  return bonus;
} // end calculateBonus




