import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Fully Offline!</>,
    imageUrl: 'img/thumb_offline.png',
    description: (
      <>
        EmuTarkov emulates the official Escape From Tarkov experience by providing an offline server that 'communicates' with the game client as if it were online. EmuTarkov does not in any way support LAN gameplay. This is strictly a single player PVE experience.
      </>
    ),
  },
  {
    title: <>Player progression!</>,
    imageUrl: 'img/thumb_progression.png',
    description: (
      <>
        EmuTarkov successfully implements progression through Offline Raids. Players do not have to worry about losing their full Tri-Zip or all of the experience gained from mowing down scavs in Customs or Interchange after successfully extracting. But, don't forget, your health, hydration and energy all persist after exiting a raid. So don't forget to drink a bottle of water and open up an MRE before going to the next raid. Don't let hunger stop you from becoming a hero from zero!
      </>
    ),
  },
  {
    title: <>Mod support!</>,
    imageUrl: 'img/thumb_moddable.png',
    description: (
      <>
        Let's say you are a visionary. You think that an MPX should fire .50cal rounds, an IFAK should restore 1000 hit points, or maybe you think a gun should have your favorite anime character skin. Well, good news for you. EmuTarkov is fully moddable and you can make any weapon fire any cartridge, make medkits that heal 1000 hitpoints, or modify item skins to match your preferences.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      description="A complete EmuTarkov documentation/Wiki for users">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
        <img className={styles.BannerImage} src={siteConfig.themeConfig.navbar.logo.src}/>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
