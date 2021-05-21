import React from "react";

import Head from "next/head";

export const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width' />
      <meta name='keywords' content={`job, american university, sulaimani, iraq, career, careers,${keywords}`} />
      <meta name='description' content={description} />
      <meta  charSet='utf-8' />
      <link rel='icon' href="/icons/favicon.ico" />
      <title>{title}</title>
    </Head>

  );
};

Meta.defaultProps = {
  title: 'AUIS Job Board',
  keywords: 'auis, careers, job posting, board',
  description: 'website that contains auis job offers from partners'
}