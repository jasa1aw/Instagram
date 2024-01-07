'use client'
import UserProfile from '@/components/userProfile/userProfile'
import Footer from '@/components/Footer/footer'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyPosts} from '@/app/store/slices/postSlice';
import { useRouter } from 'next/navigation';
export default function Profile() {
  const isAuth = useSelector((state) => state.auth.isAuth)
  const router = useRouter()
  useEffect(() => {
    if(!isAuth){
      router.push('/login')
    } 
  }, [isAuth])

  const dispatch = useDispatch()
  const posts = useSelector((state) => state.post.posts)
  // console.log(posts);
  const didMount = () =>{
      dispatch(getMyPosts())
  }
  useEffect(didMount,[])
  const post = useSelector((state) => state.post.post)

  let user =
    {
        avatar:"/img/profile/avatar.jpg",
        username:"Shalame",
        stats:{
            posts:6,
            followers:5,
            following:5
        },
        bio:"Timoti"
    }
  let followers = [
    {
      avatar: '/img/profile/posts/post1.svg',
      username: 'Michel',
      bio: 'study'
    },
    {
      avatar: '/img/profile/posts/post2.svg',
      username: 'Madi',
      bio: 'study'
    },
    {
      avatar: '/img/profile/posts/post3.svg',
      username: 'Bob',
      bio: 'study'
    },
    {
      avatar: '/img/profile/posts/post4.svg',
      username: 'Danny',
      bio: 'study'
    },
    {
      avatar: '/img/profile/posts/post5.svg',
      username: 'Kena',
      bio: 'study'
    },
  ]
  let following = [
    {
      avatar: '/img/profile/posts/post1.svg',
      username: 'Michel',
      bio: 'study'
    },
    {
      avatar: '/img/profile/posts/post2.svg',
      username: 'Madi',
      bio: 'study'
    },
    {
      avatar: '/img/profile/posts/post3.svg',
      username: 'Bob',
      bio: 'study'
    },
    {
      avatar: '/img/profile/posts/post4.svg',
      username: 'Danny',
      bio: 'study'
    },
    {
      avatar: '/img/profile/posts/post5.svg',
      username: 'Kena',
      bio: 'study'
    },
  ]
  return (
    <div>
      <UserProfile user={user} posts={posts} post={post} followers={followers} following={following}/>
      <Footer/>
    </div>
  )
}
