import React, { Component } from 'react'
import '../../css/UserPost.css'
import picturePost from '../../images/profile-picture.jpg'
import postImage from '../../images/post-image.jpg'

export default class UserPost extends Component {
  constructor (props) {
    super(props)
    this.renderPicturePost = this.renderPicturePost.bind(this)
  }

  renderPicturePost () {
    let story = true

    let picture = (story) => {
      let classes = ''
      if (story)
        classes = ['wrapper-picture', 'wrapper-inner-picture']
      else
        classes = []

      return (
        <div className={'main-wrapper-picture'}>
          <div className={`${classes[0]} rounded-circle`}>
            <div className={`${classes[1]} rounded-circle`}>
              <img src={picturePost} className="picture rounded-circle" alt=""/>
            </div>
          </div>
        </div>
      )
    }

    return picture(story)
  }

  render () {
    return (
      <>


        <div className={'card'}>

          <div className="card-header">

            <div className={'header-wrapper d-flex'}>

              <div className={'position-relative'}>

                {
                  this.renderPicturePost()
                }

              </div>

              <div className={''}>

                <div className={'user-name'}>
                  <span> Jose Agustin </span>
                </div>
              </div>

              <div className={'ml-auto'}>
                <svg className="_8-yf5 "
                     fill="#262626" height="16" viewBox="0 0 48 48"
                     width="16">
                  <circle cx="8" cy="24"
                          r="4.5"></circle>
                  <circle cx="24" cy="24"
                          r="4.5"></circle>
                  <circle cx="40" cy="24"
                          r="4.5"></circle>
                </svg>
              </div>

            </div>
          </div>

          <div className={'card-body'}>

            <img src={postImage} alt="" width="100%"/>

          </div>

          <div className={'card-footer'}>


          </div>

        </div>

      </>
    )
  }

}