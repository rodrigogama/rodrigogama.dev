import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>Under construction</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.content}>
        <div className={styles.container}>
          <div className={styles.splashWrapper}>
            <section className={styles.splashHero}>
              <div className={styles.textWrapper}>
                <div className={styles.textContainer}>
                  <div className={styles.textDescription}>
                    <strong className={styles.textSplit}>
                      <div className={styles.textLine}>
                        {`Hi, my website is mutating and it will be ready very
                        soon, `}
                      </div>
                      <div className={styles.textLine}>
                        {`until then you can contact me on `}
                        <a
                          href="https://www.linkedin.com/in/rodrigo-gama-baptista/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Linkedin
                        </a>
                        {` or `}
                        <a
                          href="https://www.instagram.com/orodrigogama/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Instagram
                        </a>
                      </div>
                      <div className={styles.textLine}>
                        to keep up to date with my latest works.
                      </div>
                    </strong>
                  </div>
                </div>
                <h1 className={styles.titleContainer}>
                  <div className={styles.titleLine}>
                    <div className={styles.word}>Good</div>
                    <strong>things</strong>
                    <div className={styles.word}>take</div>
                    <strong>time.</strong>
                  </div>
                </h1>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
