import * as React from 'react'
import { newAxiosInstance } from '@js/utils/axios_utils'

interface Props {}

export default class ShowUI extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>home</h1>
      </div>
    )
  }
}
