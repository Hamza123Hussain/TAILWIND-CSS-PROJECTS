import Featuresection from '@/components/Featuresection'
import Footer from '@/components/Footer'
import Herosection from '@/components/Herosection'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" mt-10   px-20">
        <Herosection />
        <Featuresection />
      </div>{' '}
      <Footer />
    </>
  )
}
