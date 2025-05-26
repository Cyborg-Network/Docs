import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function NotFound() {
  const siteConfig = useBaseUrl('/');
  
  return (
    <Layout title="Page Not Found">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3 text--center">
            <h1 className="hero__title">404 - Page Not Found</h1>
            <p className="hero__subtitle">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="margin-vert--lg">
              <img 
                src={useBaseUrl('img/undraw_page_not_found.svg')} 
                alt="404 illustration" 
                style={{maxWidth: '400px'}}
              />
            </div>
            <Link
              className="button button--primary button--lg"
              to={siteConfig}>
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}