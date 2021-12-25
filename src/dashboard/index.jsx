import React, { useState } from 'react'
import styled from 'styled-components'

const CardMenu = styled.div`
  text-align: center;
  border: 1px #f3f3f4 solid;
  border-radius: 8px;
  padding: 10%;
  background: #f3f3f4;
  &:hover{
    background-color: #d2d2d5;
  }
  font-size: 30px;
  margin: 10px 35px;
`

const Dashboard = () => {
  return (
    <div>
      <CardMenu>รายรับ</CardMenu>
      <CardMenu>รายจ่าย</CardMenu>
      <CardMenu>สรุปค่าใช้จ่าย</CardMenu>
    </div>
  )
}

export default Dashboard
