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
        <h1>About DrawAnything</h1>
        Draw Anything an Open Source Online drawing tool. It also supports live
        collaboration for people working remotely! :)
        <h2>Basic Shapes</h2>
        <div>
          You can draw basic shapes like Rectangle, Diamond, Ellipse, Arrows,
          Lines.
        </div>
        <h2>Free Hand Drawing</h2>
        <div>
          {`If basic shapes are not enough for you and you want to draw something
          complex or different, there’s a free hand drawing option. You could
          use that too ;)`}
        </div>
        <h2>Infinite Canvas</h2>
        <div>{`There’s an infinite canvas. You can keep scrolling up, down, left and right. `}</div>
        <h2>Live Collaboration</h2>
        <div>
          {`It’s pretty easy to start off a live collaboration session. You can
          share the room link to others and they can join the session room.`}
        </div>
        <h2>Exporting and Sharing</h2>
        <div>
          Easy to export the drawing in png format. Also there is an option to
          share the drawing as an link
        </div>
        <h2>Light and Dark mode</h2>
        <div>Supports both light and dark mode</div>
      </article>
    </>
  );
}
