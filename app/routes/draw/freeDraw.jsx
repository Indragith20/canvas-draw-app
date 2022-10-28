import React, { useEffect, useState } from 'react';
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
import styles from '../../styles/styles.css';

export const links = () => [
  ...HeaderStyleLinks(),
  ...LogoLinks(),
  ...ThemeSwitcherLinks(),
  ...MainComponentStyles(),
  ...SelectToolLinks(),
  ...ConfigToolLinks(),
  ...TextToolLinks(),
  ...ZoomContainerLinks(),
  { rel: 'stylesheet', href: styles }
];

export default function FreeDrawIndex() {
  const [loading, setLoading] = useState(true);
  const [shapes, setShapes] = useState([]);
  const { theme } = useTheme();

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
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <MainComponent
        shapes={shapes}
        mouseMove={() => {}}
        updateShape={() => {}}
        updateDb={Idb.updateDb}
        selectedTheme={theme}
      />
    </div>
  );
}
