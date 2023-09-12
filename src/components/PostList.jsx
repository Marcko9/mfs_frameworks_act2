import React from 'react'
import { Post } from './Post'

export const PostList = () => {
  return (
    <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
        <Post date="1 min ago" likes="20" comments="3" image="https://picsum.photos/300/250" autor="@raphael" text="Should he write it down? That was the question running through his mind. He couldn't believe what had just happened and he knew nobody else would believe him as well."/>
        <Post date="2 min ago" likes="10" comments="4" image="https://picsum.photos/301/250" autor="@leonardo" text="Even if he documented what had happened by writing it down, he still didn't believe anyone would still believe it. So the question remained. Was it be worth it."/>
        <Post date="7 min ago" likes="30" comments="10" image="https://picsum.photos/320/250" autor="@michelangelo" text="It was just a burger. Why couldn't she understand that? She knew he'd completely changed his life around her eating habits, so why couldn't she give him a break this one time? Yes, he had promised her and yes, he had broken that promise, but still in his mind, all it had been was just a burger."/>
        <Post date="9 min ago" likes="40" comments="0" image="https://picsum.photos/310/250" autor="@donatello" text="She wasn't even supposed to have found out. Yes, he had promised her and yes, he had broken that promise, but still in his mind, all it had been was just a burger."/>
        <Post date="20 min ago" likes="50" comments="9" image="https://picsum.photos/305/250" autor="@april" text="She considered the birds to be her friends. She'd put out food for them each morning and then she'd watch as they came to the feeders to gorge themselves for the day"/>
    </div>
  )
}
