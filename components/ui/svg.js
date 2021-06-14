import React, { Fragment } from 'react'
import {findPath} from '../../data/svgPaths'

export default function SvgLoader({path}) {
  
  const svgPath = findPath(path);
  
  if (!svgPath) {
    const error = findPath("error")
    return (
    <Fragment>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <path fill="#FFF" d={error.path} />
    </svg>
      Not found
    </Fragment>
    )
  }
  

  return (
    <Fragment>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <path fill="#FFF" d={svgPath.path} />
    </svg>
    </Fragment>
  )
}
