/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/bcdev.png';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={logo} sx={{ display: 'flex' }} css={{ width: '60px', height: '60px' }} alt="startup landing logo" />
    </Link>
  );
}
