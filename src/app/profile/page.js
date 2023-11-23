'use client'
import UserProfile from '@/components/userProfile/userProfile'
import Footer from '@/components/Footer/footer'
export default function Profile() {
  let user = [
    {
        avatar:"/img/profile/avatar.jpg",
        username:"Shalame",
        stats:{
            posts:169,
            followers:499,
            following:1253
        },
        bio:"Timoti"
    }
]
  let userPost = [
    {
      url: '/img/profile/posts/post1.svg',
      description: 1
    },
    {
      url: '/img/profile/posts/post2.svg',
      description: 2
    },
    {
      url: '/img/profile/posts/post3.svg',
      description: 3
    },
    {
      url: '/img/profile/posts/post4.svg',
      description: 4
    },
    {
      url: '/img/profile/posts/post5.svg',
      description: 5
    },
    {
      url: '/img/profile/posts/post6.svg',
      description: 6
    },
  ]
  return (
    <div>
      <UserProfile user={user} posts={userPost}/>
      <Footer/>
    </div>
  )
}
