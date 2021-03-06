import React from 'react'
import { Provider } from 'mobx-react'

import ThemeWrapper from 'containers/ThemeWrapper'

import GAWraper from 'components/GAWraper'
import OauthHinter from 'components/OauthHinter'

import initRootStore from 'stores/init'

export default class Index extends React.Component {
  static getInitialProps() {
    return {}
  }

  constructor(props) {
    super(props)
    this.store = initRootStore({ langSetup: '' })
  }

  render() {
    return (
      <Provider store={this.store}>
        <GAWraper>
          <ThemeWrapper>
            <OauthHinter />
          </ThemeWrapper>
        </GAWraper>
      </Provider>
    )
  }
}
