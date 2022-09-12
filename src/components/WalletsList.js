import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ChipsArray from './ChipsArray'

const mockedWallets = [
  { key: 1, label: 'Retirement' },
  { key: 2, label: 'Longterm' },
  { key: 3, label: 'Speculative' },
  { key: 4, label: 'Model' },
]

const WalletsList = ({ onChange }) => {
  const [wallets, setWallets] = useState(mockedWallets)

  const handleSelectedChange = (selected) => {
    if (onChange) {
      onChange(selected)
    }
  }

  return (
    <div>
      <ChipsArray initialData={wallets} onChange={handleSelectedChange} />
    </div>
  )
}

WalletsList.propTypes = {
  onChange: PropTypes.func,
}

export default WalletsList
