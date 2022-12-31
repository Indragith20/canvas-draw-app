import styles from '../styles/about.css';
import Header, { HeaderStyleLinks } from '~/components/MainHeader/Header';
import { headerLinks } from '~/constants/signInLinks';
import { LogoLinks } from '~/components/MainHeader/Logo';
import { ThemeSwitcherLinks } from '~/components/MainHeader/ThemeSwitcher';

export const links = () => [
  ...HeaderStyleLinks(),
  ...LogoLinks(),
  ...ThemeSwitcherLinks(),
  { rel: 'stylesheet', href: styles }
];

export default function About() {
  return (
    <>
      <Header headerLinks={headerLinks} />
      <article className='about-container'>
        <h1>DrawAnything Help</h1>
        <div>Under Construction</div>
      </article>
    </>
  );
}
