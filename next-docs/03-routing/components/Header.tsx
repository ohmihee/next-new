import Link from 'next/link'
import * as React from 'react';

const Header: React.FC = () => (
  <header>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/board/first">
          <a>First Post</a>
        </Link>
      </li>
      <li>
        <Link href="/board/second">
          <a>Second Post</a>
        </Link>
      </li>
    </ul>
  </header>
)

export default Header