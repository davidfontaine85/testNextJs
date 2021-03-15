import Head from "next/head";
import Link from "next/link";
import Image from "next/image";


export default function Layout({children, page}) {
    return (
        <div className="bg-blue-50 pt-5 text-center min-h-screen">
            <Head>
                <title>{page}</title>
            </Head>
            <header className="container-lg">
                <div>
                    <Image src="/main.jpg" alt="footer-pic" width="600" height="15" className="rounded-3xl object-cover mt-2" quality={100}></Image>
                </div>
                <h1 className="text-5xl mb-2">CRYPTO CLEM</h1>
                <div className="inline-grid grid-cols-6 gap-x-10 p-4 mb-2">
                    <Link href="/">
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
                            Accueil
                        </button>
                    </Link>
                    <Link href="/about">
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
                            À propos
                        </button>
                    </Link>
                    <a href="https://www.kraken.com/fr-fr/" target="_blank">
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
                            Kraken
                        </button>
                    </a>
                    <a href="https://www.binance.com/fr" target="_blank">
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
                            Binance
                        </button>
                    </a>
                    <a href="https://www.coinhouse.com/fr/" target="_blank">
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
                            Coinhouse
                        </button>
                    </a>
                    <a href="https://www.revolut.com/fr-FR" target="_blank">
                        <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
                            Revolut
                        </button>
                    </a>
                </div>
                <div>
                    <Image src="/main.jpg" alt="footer-pic" width="600" height="15" className="rounded-3xl object-cover" quality={100}></Image>
                </div>
            </header>
            <main className="pt-4 mx-20">
                {children}
            </main>
            <footer className="p-10">
                <Image src="/main.jpg" alt="footer-pic" width="1000" height="25" className="rounded-3xl object-cover" quality={100}></Image>
                <ul className="pt-10 pb-4 flex justify-around">
                    
                    <li>©dafonfs - 2021</li>
                </ul>
                <p>La petite Appli qui va bien quand tu veux Clutcher.</p>
            </footer>
            
        </div>
    )
}