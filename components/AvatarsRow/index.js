/*
 *
 * AvatarsRow
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import R from 'ramda'
import { Tooltip } from 'antd'

import { ATATARS_LIST_LENGTH } from '../../config/general'

import { Wrapper, AvatarsItem, AvatarsImg, AvatarsMore } from './styles'

import { makeDebugger, prettyNum } from '../../utils'

/* eslint-disable-next-line */
const debug = makeDebugger('c:AvatarsRow:index')

const validUser = R.compose(
  R.not,
  R.isNil
)

const AvatarsRow = ({
  users,
  total,
  height,
  limit,
  onUserSelect,
  onTotalSelect,
  reverse,
}) => {
  if (users.length === 0) {
    return <span />
  }

  users = R.filter(validUser, users)
  const sortedUsers = reverse ? users : R.reverse(users)

  return (
    <Wrapper height={height}>
      {total <= 1 ? (
        <span />
      ) : (
        <AvatarsItem onClick={onTotalSelect.bind(this, { users, total })}>
          <Tooltip title={`所有评论共 ${total} 条`}>
            <AvatarsMore total={total}>{prettyNum(total)}</AvatarsMore>
          </Tooltip>
        </AvatarsItem>
      )}

      {R.slice(0, limit, sortedUsers).map(user => (
        <AvatarsItem key={user.id} onClick={onUserSelect.bind(this, user)}>
          <Tooltip title={user.nickname}>
            <AvatarsImg src={user.avatar} />
          </Tooltip>
        </AvatarsItem>
      ))}
    </Wrapper>
  )
}

AvatarsRow.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.string,
      nickname: PropTypes.string,
      extra_id: PropTypes.string,
    })
  ),
  total: PropTypes.number.isRequired,
  height: PropTypes.string,
  limit: PropTypes.number,
  onUserSelect: PropTypes.func,
  onTotalSelect: PropTypes.func,
  reverse: PropTypes.bool,
}

AvatarsRow.defaultProps = {
  height: '32px',
  users: [],
  limit: ATATARS_LIST_LENGTH.POSTS,
  onUserSelect: debug,
  onTotalSelect: debug,
  reverse: true,
}

export default AvatarsRow
