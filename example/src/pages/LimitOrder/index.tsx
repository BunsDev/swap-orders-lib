import React from 'react'
import { GelatoLimitOrderPanel, GelatoLimitOrdersHistoryPanel } from 'soulswap-limit-orders-react'

export default function LimitOrder() {
  return (
    <>
      <GelatoLimitOrderPanel />
      <GelatoLimitOrdersHistoryPanel />
    </>
  )
}
