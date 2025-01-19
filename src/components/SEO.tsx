import Head from 'next/head';

interface SEOData {
    title:string;
    description:string;
}

const SEO:React.FC<SEOData> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default SEO;
