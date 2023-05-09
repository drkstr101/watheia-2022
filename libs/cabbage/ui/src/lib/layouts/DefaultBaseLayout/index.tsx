import classNames from 'clsx';
import Head from 'next/head';
import Footer from '../../sections/Footer';
import Header from '../../sections/Header';
import {
  seoGenerateMetaDescription,
  seoGenerateMetaTags,
  seoGenerateTitle,
} from '../../utils/seo-utils';

export default function DefaultBaseLayout(props) {
  const { page, site } = props;
  const pageMeta = page?.__metadata || {};
  const title = seoGenerateTitle(page, site);
  const metaTags = seoGenerateMetaTags(page, site);
  const metaDescription = seoGenerateMetaDescription(page, site);
  return (
    <div
      className={classNames('sb-page', pageMeta.pageCssClasses)}
      data-sb-object-id={pageMeta.id}
    >
      <div className="sb-base sb-default-base-layout">
        <Head>
          <title>{title}</title>
          {metaDescription && (
            <meta name="description" content={metaDescription} />
          )}
          {metaTags.map((metaTag) => {
            if (metaTag.format === 'property') {
              // OpenGraph meta tags (og:*) should be have the format <meta property="og:…" content="…">
              return (
                <meta
                  key={metaTag.property}
                  property={metaTag.property}
                  content={metaTag.content}
                />
              );
            }
            return (
              <meta
                key={metaTag.property}
                name={metaTag.property}
                content={metaTag.content}
              />
            );
          })}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {site.favicon && <link rel="icon" href={site.favicon} />}
        </Head>
        {site.header && (
          <Header
            {...site.header}
            data-sb-object-id={site.header?.__metadata?.id}
          />
        )}
        {props.children}
        {site.footer && (
          <Footer
            {...site.footer}
            data-sb-object-id={site.footer?.__metadata?.id}
          />
        )}
      </div>
    </div>
  );
}
