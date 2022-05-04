import React from 'react'
import Popup from 'reactjs-popup';
import { domain } from 'lib/config'
import { resolveNotionPage } from 'lib/resolve-notion-page'
import { NotionPage } from 'components'


export default function PopupGfg(){
  return(
  Tally.openPopup('mY9bdm', {
  layout: 'modal', // Open as a centered modal
  width: 700, // Set the width of the modal
  autoClose: 5000, // Close the popup 5 seconds after form was submitted (in ms)
});
  )
};

// edited to here

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function NotionDomainPage(props) {
  return <NotionPage {...props} />
}
