import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';

// export async function getStaticProps(){
//   const allPostData = getSortedPostsData();
//   return {
//     props:{
//       allPostData
//     }
//   }
// }

export const getStaticProps:GetStaticProps =async (params) => {
  const allPostData = getSortedPostsData();
  return {
    props:{
      allPostData
    }
  }
  
}


export default function Home({allPostData}:{allPostData:{id:string, date:string, title:string}[]}) {
  return (
    <Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>My Self Salvador</p>
      <p>
        My content and introduction 
      </p>
    </section>
    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingMd}>Blog</h2>
      <ul className={utilStyles.list}>
        {
          allPostData.map(({id, date, title})=>(
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))
        }
      </ul>
    </section>
  </Layout>
  )
}
