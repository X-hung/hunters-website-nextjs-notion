import * as React from 'react'
import { Block, ExtendedRecordMap } from 'notion-types'

import { PageActions } from './PageActions'
import { PageSocial } from './PageSocial'

import { getPageTweet } from 'lib/get-page-tweet'
import { PageProfile } from './PageProfile'

export const PageAside: React.FC<{
  block: Block
  recordMap: ExtendedRecordMap
  isAbout: boolean
  isBlogPost: boolean
}> = ({ block, recordMap, isAbout, isBlogPost }) => {
  if (!block) {
    return null
  }

  // only disply profile card in About page
  if (isAbout) {
    return <PageProfile/>
  }

  // only display comments and page actions on blog post pages
  if (isBlogPost) {
    const tweet = getPageTweet(block, recordMap)
    if (!tweet) {
      return null
    }

    return <PageActions tweet={tweet} />
  }

  return <PageSocial />
}
