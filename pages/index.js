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
    
        <img src="https://media-exp1.licdn.com/dms/image/C5103AQEntiU4nOekqQ/profile-displayphoto-shrink_800_800/0/1546613243029?e=2147483647&v=beta&t=bBqqXta3icGetTKOf-ZdxlixAYWeMHgeEcTD1khdkPA">
      </main>
    

      <Footer />
    </div>
  )
}
