'use client'
import Home from '@/components/Home/home';

export default function Main() {
  let stories = [
    {
      id: 1,
      url: '/img/profile/posts/post1.svg',
      username: 'Dan'
    },
    {
      id: 2,
      url: '/img/profile/posts/post2.svg',
      username: 'Sandy'
    },
    {
      id: 3,
      url: '/img/profile/posts/post3.svg',
      username: 'Mark'
    },
    {
      id: 4,
      url: '/img/profile/posts/post4.svg',
      username: 'Sawa'
    },
    {
      id: 5,
      url: '/img/profile/posts/post5.svg',
      username: 'MArat'
    },
    {
      id: 6,
      url: '/img/profile/posts/post6.svg',
      username: 'Turbo'
    },
  ]
  return (
    <main>
      <div>
        <Home stories={stories}/>
      </div>
    </main>
  )
}
