import React from 'react'
import TourBookedTable from './TourBookedTable'

export const TourBookedStatus = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap:"wrap",
        margin:"10px"
      }}
    >
      <div>
        <h2>Tour Status</h2>
      </div>
      <div>
        <TourBookedTable/>
      </div>
    </div>
  )
}
