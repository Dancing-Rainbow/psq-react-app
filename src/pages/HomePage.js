import React, { Component } from 'react'
import { ThemeContext } from '../Context'
import UserPage from './UserPage';

class HomePage extends Component {
  // static contextType = ThemeContext // 两种写法
  render(){
    console.log('this.context',this.context);
    const {themeColor} = this.context
    return (
      <div>
         <h3 className={themeColor}>HomePage, {themeColor}</h3>
         <UserPage/>
      </div>
    )
  }
}

HomePage.contextType = ThemeContext

export default HomePage