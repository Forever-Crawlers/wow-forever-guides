import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  mark: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Class Guides',
    mark: 'CG',
    description:
      'Master your class, talents, rotations, and gear without the guesswork.',
  },
  {
    title: 'Dungeon Guides',
    mark: 'DG',
    description:
      'Prepare for every pull with boss tactics, routes, and role-specific tips.',
  },
  {
    title: 'Crawler Corner',
    mark: 'CC',
    description:
      'Explore builds, community experiments, and clever ways to keep the crawl interesting.',
  },
];

function Feature({title, mark, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', styles.featureColumn)}>
      <article className={styles.featureCard}>
        <div className={styles.featureMark} aria-hidden="true">
          {mark}
        </div>
        <Heading as="h2" className={styles.featureTitle}>
          {title}
        </Heading>
        <p>{description}</p>
      </article>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
