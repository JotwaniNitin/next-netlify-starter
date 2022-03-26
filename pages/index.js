import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Having fun with the Crio Session!" />
        <p className="description">
          Thanks Sridher Jeyachandran!
        </p>
      </main>

      <Footer />
    </div>
  )
}
