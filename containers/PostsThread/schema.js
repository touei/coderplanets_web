import gql from 'graphql-tag'

const pagedPostsRaw = `
  query pagedPosts($filter: PagedArticleFilter) {
    pagedPosts(filter: $filter) {
      entries {
        id
        title
        digest
        insertedAt
        updatedAt
        views
        commentsParticipatorsCount
        commentsParticipators(filter: { first: 5 }) {
          id
          nickname
          avatar
        }
      }
      totalCount
      pageSize
      pageNumber
    }
  }
`
const partialTagsRaw = `
  query($communityId: ID!, $thread: CmsThread!) {
    partialTags(communityId: $communityId, thread: $thread) {
      id
      title
      color
      thread
    }
  }
`

const pagedPosts = gql`
  ${pagedPostsRaw}
`
const partialTags = gql`
  ${partialTagsRaw}
`

const schema = {
  pagedPosts,
  pagedPostsRaw,
  partialTags,
  partialTagsRaw,
}

export default schema