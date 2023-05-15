import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/" style={linkStyle}>
      Home
    </Link>
    <Link href="/profile" style={linkStyle}>
      Profile
    </Link>
  </div>
);

export default Header;