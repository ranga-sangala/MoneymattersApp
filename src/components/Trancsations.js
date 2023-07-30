import React,{useState} from 'react'
import TabItem from './TabItem'

const tabsList = [
  {tabId:"allTransactions",displayText:"All Transactions"},
  {tabId:"debit",displayText:"Debit"},
  {tabId:"credit",displayText:"Credit"},
]
const Transactions = () => {
   const [activeTab,setActiveTab] = useState(tabsList[0].tabId)

  const clickTabItem = (tabValue) => {
         setActiveTab(tabValue)
  }
  console.log(activeTab)
  return (
    <div className='dashboard-container'>
      <div className='component-header'>
        <div>
            <h1 className='align-self-start container-heading'>Transactions</h1>
            <ul className='tabs-container'>
              {tabsList.map((tab) =>(
                <TabItem key={tab.tabId} tabDetails={tab} clickTabItem = {clickTabItem} isActive={activeTab===tab.tabId}/>
              ))}
        </ul>
        </div>
            <button className='align-self-end btn btn-primary '><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
               <path d="M9.9998
                   4 4.16663V15.8333M4.1665 9.99996H15.8332" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>Add transaction</button>
        </div>
    </div>
  )
}

export default Transactions
