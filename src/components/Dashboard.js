import React,{useEffect} from 'react'

const Dashboard = () => {

     useEffect(()=>{
        getCreditDebitData()
     })

     async function getCreditDebitData(){
        const response = await fetch('https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals');
        const data = await response.json()
        console.log(data)
        
     }

  return (
    <div className='dashboard-container'>
        <div className='component-header'>
            <h1 className='align-self-start'>Accounts</h1>
            <button className='align-self-end btn btn-primary pr-2'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.9998
  4 4.16663V15.8333M4.1665 9.99996H15.8332" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Add transaction</button>
        </div>
        <div className='transactions-type-container d-flex flex-row m-3'>
         <div className='credit-container d-flex m-2 px-2'>
            <div>
            <h1 className='credit-amount'>$12.750</h1>
            <p className='amount-type'>Credit</p>
            </div>
            <div className='px-2'>
            <img alt="credit"  src='https://res.cloudinary.com/lakshmiranga/image/upload/v1690650667/rgyo74sfutbd4aspf59y.png'/>
            </div>
            
         </div>
         <div className='debit-container d-flex m-2 px-2'>
            <div>
            <h1 className='debit-amount'>$5600</h1>
            <p className='amount-type'>Debit</p>
            </div>
            <div className='px-2'>
            <img alt="debit" className='m-2' src="https://res.cloudinary.com/lakshmiranga/image/upload/v1690650943/oqejeswxjaqyvo72izq9.svg"/>
            </div>
            
         </div>
         </div>
         <h2 className='trans-heading align-self-start m-3'>Last transaction</h2>
         <div className='transactions-container m-4'>
            <div className='tranactions-details'>
            <i className="bi bi-arrow-down-circle mb-2"></i>
            <p className='transaction-type'>transaction name</p>
            <p className='transaction-item'>category</p>
            <p className='transaction-item'>date</p>
            <p className='transaction-amount'>Amount</p>
            <i class="bi bi-pencil mb-2"></i>
            <i class="bi bi-trash mb-2"></i>
            </div>
        
         </div>
    </div>
  )
}

export default Dashboard
