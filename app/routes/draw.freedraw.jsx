import { json } from '@remix-run/node';
import React, { useEffect, useState } from 'react';
import { useMatchMedia } from '~/components/Common/hooks/useMatchMedia';
import { ModalLinks } from '~/components/Common/Modal/Modal';
import { ConfigToolLinks } from '~/components/ConfigTool/ConfigTool';
import MainComponent, { MainComponentStyles } from '~/components/main';
import { HeaderStyleLinks } from '~/components/MainHeader/Header';
import { LogoLinks } from '~/components/MainHeader/Logo';
import { ThemeSwitcherLinks } from '~/components/MainHeader/ThemeSwitcher';
import { SelectToolLinks } from '~/components/SelectTool/SelectTool';
import { TextToolLinks } from '~/components/TextTool/TextTool';
import Idb from '~/components/utils/idb';
import { ZoomContainerLinks } from '~/components/ZoomContainer/ZoomContainer';
import { useTheme } from '~/contexts/themeContext';
import styles from '../styles/styles.css';

export const links = () => [
  ...HeaderStyleLinks(),
  ...LogoLinks(),
  ...ThemeSwitcherLinks(),
  ...MainComponentStyles(),
  ...SelectToolLinks(),
  ...ConfigToolLinks(),
  ...TextToolLinks(),
  ...ZoomContainerLinks(),
  ...ModalLinks(),
  { rel: 'stylesheet', href: styles }
];

export const loader = async ({ request, params }) => {
  return json({ currentUser: null });
};

export default function FreeDrawIndex() {
  const [loading, setLoading] = useState(true);
  const [shapes, setShapes] = useState([]);
  const { theme } = useTheme();
  const isMobile = useMatchMedia('(min-width: 320px) and (max-width: 767px)');

  useEffect(() => {
    Idb.getDataFromIdb('app-state-persist')
      .then((data) => {
        setShapes(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setShapes([]);
      });
  }, []);

  return loading ? (
    <div className='loading'>Setting Up environment</div>
  ) : (
    <div>
      <MainComponent
        shapes={shapes}
        mouseMove={() => {}}
        updateShape={() => {}}
        updateDb={Idb.updateDb}
        selectedTheme={theme}
        isMobile={isMobile}
        backLink={'/'}
        keepLastSelected={true}
      />
      {/* <MobileWarning backLink={'/'} backLinkText='Back to Home' /> */}
    </div>
  );
}
