import Head from 'next/head'

import Script from 'next/script'

import * as React from 'react'
import * as types from 'lib/types'

// TODO: remove duplication between PageHead and NotionPage Head


export const PageHead: React.FC<types.PageProps> = ({ site }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      {site?.description && (
        <>
          <meta name='description' content={site.description} />
          <meta property='og:description' content={site.description} />
        </>
      )}

      <meta name='theme-color' content='#F3C12B' />
      <meta property='og:type' content='website' />
      <meta property='og:image' content='https://drive.google.com/uc?id=1sr_ZFLGNq-f49hJV_8Ifql_7tgFwS5If' />
      
      <meta property='twitter:card' content='https://drive.google.com/uc?id=1sr_ZFLGNq-f49hJV_8Ifql_7tgFwS5If' />
      <meta property='twitter:url' content='https://www.thelapyae.com/' />
      <meta property='twitter:title' content='TheLaPyae' />
      <meta property='twitter:description' content='TheLaPyae - No Code Brand Strategist From Yangon' />
      <meta property='twitter:image' content='https://drive.google.com/uc?id=1sr_ZFLGNq-f49hJV_8Ifql_7tgFwS5If'/>
      
      // from here
      
     <Script src="https://tally.so/widgets/embed.js" strategy="lazayOnload" 
       
       Tally.openPopup('mY9bdm', {
  layout: 'modal', // Open as a centered modal
  width: 700, // Set the width of the modal
  autoClose: 5000, // Close the popup 5 seconds after form was submitted (in ms)
});
       
       />
     
      // I did edit to here 

    </Head>
    
  )
}
