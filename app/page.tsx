import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/CTA'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>

      <h1 className='text-2xl underline'>Popular Companions</h1>

      {/* Popular Companions Card Section */}
      <section className='home-section' >
        <CompanionCard 
          id="123"
          name="Neura The Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="science"
          duration={45}
          color="#ffda6e"
        />
        <CompanionCard 
          id="456"
          name="Countsy the Math Whiz"
          topic="Deravitives and Integrals"
          subject="Maths"
          duration={30}
          color="#e5d0ff"
        />
        <CompanionCard 
          id="789"
          name="Verba the vocab guru"
          topic="Language"
          subject="English Literature"
          duration={30}
          color="#BDE7F7"
        />

      </section>

      {/*Home Section*/}
      <section className="home-section">
        <CompanionsList 
          title="Recently completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>

    </main>
  )
}

export default Page