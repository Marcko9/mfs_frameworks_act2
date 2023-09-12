import React from 'react'
import { Post } from './Post'

export const PostList = () => {
  return (
    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
        <Post date="1 min ago" likes="20" comments="3" imagen="https://picsum.photos/300/250" autor="@Raphael"/>
        <Post date="2 min ago" likes="10" comments="4" imagen="https://picsum.photos/301/250" autor="@Leonardo"/>
        <Post date="7 min ago" likes="30" comments="10" imagen="https://picsum.photos/320/250" autor="@Michelangelo"/>
        <Post date="9 min ago" likes="40" comments="0" imagen="https://picsum.photos/310/250" autor="@Donatello"/>
        <Post date="20 min ago" likes="50" comments="9" imagen="https://picsum.photos/305/250" autor="@April"/>
    </div>
  )
}
