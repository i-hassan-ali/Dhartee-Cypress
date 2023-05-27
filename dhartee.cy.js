//HomePage
describe('testCase 1', () => {
  let userName = {
    Firstname : 'M Hassan Ali',
    lastName : 'Zaffar' ,
    email : 'ihassanalizaffar@gmail.com',
    phone : '3060760130',
    message : 'Hey Nice to visit your website, Give me Free Plot',
    password : '1234@Dhartee'

  }
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Prevent Cypress from failing the test on unhandled promise rejections
      return false
    })
      cy.visit("https://dev.dhartee.pk/"); // Go to this URL
  })
  it('visitWebHomePage', () => {
    // cy.get('#\31 ').click({force:true})
    // cy.wait(1000);
    // cy.get('#\32 ').click({force:true})    // cy.wait(1000);
    // cy.get('#\30 ').click({force:true})
    cy.get('.input-group > .btn', {timeout:5000}).click({force: true})
    cy.wait(1000);
    cy.contains("a",'Islamabad').click({force: true})
    cy.wait(1000);
    cy.get('#home-div > .input-group > #zip-input').type("I-11/2",{force:true})
    cy.wait(1000);
   // cy.get('[style="align-items: center; margin-right: 2rem;"] > :nth-child(5)').click({force:true})


    //Add Specifications
    cy.get('.d-flex > [data-bs-toggle="dropdown"]').click({force:true})
    cy.wait(1000);
    cy.get(':nth-child(2) > :nth-child(1) > .col-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiSelect-select').click({force:true})
    // Add Specifications/Select property 
    cy.contains("li",'Plots').click({force: true})
    cy.wait(1000);
    cy.get(':nth-child(2) > :nth-child(1) > .col-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiSelect-select').click({force:true})
    cy.wait(1000);
    cy.contains("li",'Home').click({force: true})
    cy.wait(1000);
    cy.get(':nth-child(2) > :nth-child(1) > .col-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiSelect-select').click({force:true})
    cy.wait(1000);
    cy.contains("li",'Commercials').click({force: true})
    cy.wait(1000);

    // Select Property Type
    cy.get(':nth-child(3) > :nth-child(1) > .col-12 > .MuiFormControl-root > .MuiOutlinedInput-root > .MuiSelect-select').click({force:true})
    cy.wait(2000);

    
    //Dharti_Visit_And_Search
    // cy.get('[style="background-color: rgb(223, 167, 44); border-radius: 15px; height: 2.7rem; margin-top: auto; margin-bottom: auto; padding: 9px 17px; cursor: pointer; border: none;"]').click({force:true})
    // cy.get('.mapboxgl-canvas').click({force:true})
    // cy.get('[style="align-items: center; margin-right: 2rem;"] > :nth-child(1)').click({force:true})


    //HomePageAgain
    
  })
  it('Visit Menu Bar', () => {
    cy.get('[style="align-items: center; margin-right: 2rem;"] > :nth-child(2)').click({force:true})
    cy.wait(1000);
    cy.get('[style="align-items: center; margin-right: 2rem;"] > :nth-child(3)').click({force:true})
    cy.wait(1000);
    cy.contains("li" , 'Buy').click({force:true})
    cy.wait(1000);
    cy.get('[style="align-items: center; margin-right: 2rem;"] > :nth-child(3)').click({force:true})
    cy.wait(1000);
    cy.contains("li" , 'Rent').click({force:true})
    cy.wait(1000);
    cy.get('[style="align-items: center; margin-right: 2rem;"] > :nth-child(3)').click({force:true})
    cy.wait(1000);
    cy.contains("li" , 'Invest').click({force:true})
    cy.wait(1000);
    cy.get('[style="align-items: center; margin-right: 2rem;"] > :nth-child(4)').click({force:true})
    cy.wait(1000);
    cy.get('[style="align-items: center; margin-right: 2rem;"] > :nth-child(5)').click({force:true})
    cy.wait(1000)
    cy.get('.MuiAvatar-root').click({force:true})
  })

  it.only('Login',()=>{
    cy.Login(userName.phone , userName.password)
    cy.get('.MuiList-root > :nth-child(5)').click()
    cy.get('.jss20').click({force:true})
    cy.get('.p-4 > .MuiButtonBase-root').click({force:true})

    cy.get('[type="file"]')
    .eq(2)
    .selectFile('C:\\dp.jpg',{force:true})
    cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > #formBasicEmail').type(userName.Firstname , {force:true})
    cy.get(':nth-child(1) > :nth-child(3) > :nth-child(1) > #formBasicEmail').type(userName.lastName , {force:true})
    cy.get(':nth-child(1) > :nth-child(4) > :nth-child(1) > #formBasicEmail').type(userName.email , {force:true})
    cy.get(':nth-child(1) > :nth-child(5) > :nth-child(1) > #formBasicEmail').type(userName.phone , {force:true})
    cy.get('.col-md-4 > .px-1').type('1234', {force:true});
    cy.get('.col-xxl-10 > [controllid="formBasicEmail"] > .row > :nth-child(1) > .px-1')
    cy.get('[type="file"]')
    .eq(0)
    .selectFile('C:\\dp.jpg',{force:true})
    cy.get(':nth-child(2) > .px-1')
    cy.get('[type="file"]')
    .eq(0)
    .selectFile('C:\\dp.jpg',{force:true})
    cy.get('.col-10 > div > #formBasicEmail').type('ABDAHSJDFGSFHMGSDYU', {force:true})

  }) 
}) 