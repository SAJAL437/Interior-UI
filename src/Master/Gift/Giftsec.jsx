import React from 'react'
import Giftsection from '../../Component/GiftCard/Giftsection'
import Ideas from '../../Component/GiftCard/Ideas'
import Other from '../../Component/GiftCard/Other'
const Giftsec = () => {
  return (
    <div>
      <div className="mx-auto sm:p-2">
        <Giftsection />
        <Ideas/>
        <Other/>
      </div>
    </div>
  )
}

export default Giftsec
