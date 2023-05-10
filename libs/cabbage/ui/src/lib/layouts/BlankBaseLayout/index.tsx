import classNames from 'clsx';
import Head from 'next/head';

export default function BlankBaseLayout(props) {
  const { page, site } = props;
  const pageMeta = page?.__metadata || {};
  return (
    <div
      className={classNames('sb-page', pageMeta.pageCssClasses)}
      data-sb-object-id={pageMeta.id}
    >
      <Head>
        <title>{page.title}</title>
        <meta name="description" content="Stackbit Components Library" />
        {site.favicon && <link rel="icon" href={site.favicon} />}
      </Head>
      {props.children}
    </div>
  );
}
