import React from 'react'

const TabItem = (props) => {
       const {tabDetails,clickTabItem,isActive} = props
       const {tabId,displayText} = tabDetails
       const onClickTabItem = () =>{
        clickTabItem(tabId)
       }
       console.log(isActive)
       const activeTab = isActive ? "active-Tab" :"";

  return (
    <li>
        <button className={`tab-btn ${activeTab}`} type="submit" onClick={onClickTabItem}>{displayText}</button>
    </li>
  )
}

export default TabItem
