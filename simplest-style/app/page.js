import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container min-h-screen bg-cover bg-center p-8 sm:bg-[url('https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg')]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
        <img width={40} src="992700.png" alt="992700.png" />
        <ul className="flex flex-wrap gap-3 sm:gap-5">
          <li className="px-3">
            <Link href={'#'}> Home</Link>
          </li>
          <li className="px-3">
            <Link href={'#'}>Features</Link>
          </li>
          <li className="px-3">
            <Link href={'#'}>Pricing</Link>
          </li>
          <li className="px-3">
            <Link href={'#'}>Contact</Link>
          </li>
        </ul>
        <img width={40} src="Alarm Clock-595b40b65ba036ed117d3b48.svg" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="max-w-xl mt-10 sm:mt-40">
          <h1 className="text-4xl sm:text-7xl">
            Time Pieces <span className="text-sm">Receiving Love</span>
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
            commodo erat. Sed ultrices nulla nec sapien feugiat tincidunt.
          </p>
          <button className="mt-4 bg-green-500 border-2 border-transparent rounded-full px-4 py-2 hover:bg-black hover:text-white hover:border-white">
            Order Now
          </button>
        </div>
        <img
          className="rounded-lg w-full sm:w-96 mt-10 sm:mt-0"
          src="https://www.bobswatches.com/rolex-blog/wp-content/uploads/2017/01/Green-Gold-Rolex-GMT-Master.jpg"
          alt=""
        />
      </div>
    </div>
  )
}
