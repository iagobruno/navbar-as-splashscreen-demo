import React, { FunctionComponent } from 'react'

type Props = {
  title: string,
  image: string,
  otherProps: {
    [index: string]: any,
  },
  children?: never,
}

const Thumbnail: FunctionComponent<Props> = ({ title, image, otherProps }) => {
  return (
    <div className="thumbnail" {...otherProps}>
      <img src={image} alt={title} />
      <div className="thumbnail__title">{title}</div>
    </div>
  )
}

export default Thumbnail
