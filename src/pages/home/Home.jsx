import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBY/TrustedBy'

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
    </div>
    
  )
}

export default Home