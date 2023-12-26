'use client'
import UserProfile from '@/components/userProfile/userProfile'
import Footer from '@/components/Footer/footer'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation';
export default function Profile() {
  const isAuth = useSelector((state) => state.auth.isAuth)
  const router = useRouter()
  useEffect(() => {
    if(!isAuth){
      router.push('/login')
    } 
  }, [isAuth])

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
  // let userPost = [
  //   {
  //     id: 1,
  //     url: '/img/profile/posts/post1.svg',
  //     description: 1
  //   },
  //   {
  //     id: 2,
  //     url: '/img/profile/posts/post2.svg',
  //     description: 2
  //   },
  //   {
  //     id: 3,
  //     url: '/img/profile/posts/post3.svg',
  //     description: 3
  //   },
  //   {
  //     id: 4,
  //     url: '/img/profile/posts/post4.svg',
  //     description: 4
  //   },
  //   {
  //     id: 5,
  //     url: '/img/profile/posts/post5.svg',
  //     description: 5
  //   },
  //   {
  //     id: 6,
  //     url: '/img/profile/posts/post6.svg',
  //     description: 6
  //   },
  // ]
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
      <UserProfile user={user}  followers={followers} following={following}/>
      <Footer/>
    </div>
  )
}
