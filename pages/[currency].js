
import Layout from './../components/Layout';

export default function Currency({res}) {
    return (
        <Layout>
            <div className="relative md p-8 border border-blue-300 sm:rounded-3xl bg-blue-100 md:w-auto flex-1 mb-6">
                <h1 className="text-3xl m-3">{res.name}</h1>
                <p className="text-justify my-5">{res.description}</p>
                <a className="p-3 hover:shadow bg-white border border-red-300 rounded-3xl" href={res.reddit_url} target="_blank">Lien Reddit</a>
                
            </div>
        </Layout>
    )
    
}

//ServerSide rendered
export async function getServerSideProps({query}) {
    try {
      const res = await fetch(
        `https://api.nomics.com/v1/currencies?key=112e9d6998678fa78aeef6429a7ff807&ids=${query.currency}&attributes=id,name,logo_url,description,twitter_url,reddit_url`
      );
      const result = await res.json();
      
      return {
        props: {
            res: result[0],
        }
      };
  
    } catch (error) {
      console.error(error);
    }
  }