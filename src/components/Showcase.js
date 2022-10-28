import React from 'react'
import LeftImage from '../assets/images/img-2.svg'
import RightImage from '../assets/images/img-1.svg'

const Showcase = () => {
  return (
    <section className="_showcase">
        <div className="container-fluid">
            <img className="fr-1"  src={LeftImage} alt="" />
            <div className="fr-1">mitten</div>
            <img className="fr-1"  src={RightImage} alt="" />
        </div>
    </section>
  )
}

export default Showcase