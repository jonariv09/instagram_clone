import React, { Component } from 'react'
import UserPost from './UserPost'

export default class ContainerPost extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <>

        {
          [1, 2, 3].map((index, n) => (
            <UserPost key={index}/>
          ))
        }

      </>
    )
  }

}

