/*
 *
 * RepoViewer
 *
 */

import React from 'react'
import { inject, observer } from 'mobx-react'

import ArticleViewerHeader from '../ArticleViewerHeader'
import ArticleBodyHeader from '../ArticleBodyHeader'
import { CommentsWrapper } from './styles'

import FavoritesCats from '../FavoritesCats'
import Comments from '../Comments'
import { GithubRepoPage } from '../../components'

import { makeDebugger, storePlug, THREAD } from '../../utils'

import * as logic from './logic'

/* eslint-disable-next-line */
const debug = makeDebugger('C:RepoViewer')

class RepoViewerContainer extends React.Component {
  componentDidMount() {
    const { repoViewer, attachment } = this.props
    logic.init(repoViewer, attachment)
  }

  componentWillUnmount() {
    logic.uninit()
  }

  render() {
    const { repoViewer } = this.props
    const { viewingData } = repoViewer

    return (
      <React.Fragment>
        <FavoritesCats />
        <GithubRepoPage
          repo={viewingData}
          viewerHeader={
            <ArticleViewerHeader
              data={viewingData}
              author={viewingData.author}
              thread={THREAD.REPO}
              showStar={false}
              showLastSync
            />
          }
          bodyHeader={
            <ArticleBodyHeader
              data={viewingData}
              thread={THREAD.REPO}
              middle="labeler"
            />
          }
        />
        <CommentsWrapper>
          <Comments />
        </CommentsWrapper>
      </React.Fragment>
    )
  }
}

export default inject(storePlug('repoViewer'))(observer(RepoViewerContainer))
