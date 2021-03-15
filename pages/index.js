import Link from "next/link";
import Layout from "../components/Layout";

export default function Home({ res, dollar }) {
  console.log(dollar);
  return (
    <div>
      <Layout page='Crypto Watch - Accueil'>
        <ul className="flex justify-around py-10 mdpy-2">
          {res.map((crypto, index) => {
            return (
              <li key={index} className="relative hover:shadow-md p-8 border border-blue-300 rounded-3xl bg-blue-100 md:w-auto flex-1 mx-5">
              <Link href={`/${crypto.id}`}>
                <a className="rounded-md">
                  <div className="text-center">
                    <img src={crypto.logo_url} alt={crypto.name} className="w-20 h-20 mx-auto mb-6"/>
                    <h2 className="text-2xl mb-6 uppercase tracking-wider">{crypto.name}</h2>
                    <h3 className="font-bold text-2xl mb-4">{parseFloat(crypto.price).toFixed(2)} €</h3>
                    <h4 className="text-1xl mb-4">{parseFloat(dollar * crypto.price).toFixed(2)} $</h4>
                    <p>1 jour : <span className="font-bold">{parseFloat(crypto['1d'].price_change_pct * 100).toFixed(2) + " % "}</span>
                      {crypto["1d"].price_change_pct < 0 ? (
                        <span className="text-2xl text-red-500">➘</span>
                      ) :
                        <span className="text-2xl text-green-500">➚</span>
                      }
                    </p>
                    <p>30 jours : <span className="font-bold">{parseFloat(crypto['30d'].price_change_pct * 100).toFixed(2) + " % "}</span>
                      {crypto["30d"].price_change_pct < 0 ? (
                        <span className="text-2xl text-red-500">➘</span>
                      ) :
                        <span className="text-2xl text-green-500">➚</span>
                      }
                    </p>
                    <p>1 an : <span className="font-bold">{parseFloat(crypto['365d'].price_change_pct * 100).toFixed(2) + " % "}</span>
                      {crypto["365d"].price_change_pct < 0 ? (
                        <span className="text-2xl text-red-500">➘</span>
                      ) :
                        <span className="text-2xl text-green-500">➚</span>
                      }
                    </p>
                  </div>
                </a>
              </Link>
            </li>
            )
          })}
        </ul>
      </Layout>
    </div>
  )
}


//ServerSide rendered
export async function getStaticProps(params) {
  try {
    const res = await fetch(
      'https://api.nomics.com/v1/currencies/ticker?key=112e9d6998678fa78aeef6429a7ff807&ids=BTC,ETH,EGLD&interval=1d,30d,365d&convert=EUR&per-page=100&page=1'
    ).then((res) => res.json());

    const change = await fetch(
      'https://api.exchangeratesapi.io/latest'
    ).then((change) => change.json());

    return {
      props: {
        res,
        dollar: change.rates.USD 
      }
    };

  } catch (error) {
    console.error(error);
  }
}
