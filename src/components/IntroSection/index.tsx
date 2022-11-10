import React from 'react';

import IntroSectionCard from './IntroSectionCard';

import classes from './IntroSection.module.scss';

const IntoSection = () => {
  return (
    <section className={classes.intro}>
      <div className={`${classes.introCard__container} flex`}>
        <IntroSectionCard
          title="PARTICULIERS"
          subTitle="Contribuez à améliorer l'impact des entreprises"
          paragraph="Ceux et celles qui se sentent concernés par les enjeux actuels et veulent contribuer à l’amélioration du bien-être, de l’environnement et des pratiques économiques peuvent s’inscrire gratuitement sur notre plateforme. Vous trouverez des entreprises avec lesquelles vous interagissez et vous pourrez les noter sur de multiples critères de développement durable"
          buttonText="Inscription gratuite"
        />
        <IntroSectionCard
          title="PROFESSIONNELS"
          subTitle="Evaluez gratuitement votre RSE auprès de vos parties prenantes"
          paragraph="Les principes de la norme ISO 26000 établissent la référence mondiale en matière de développement durable. Pourtant, ils sont impossibles à estimer sans le retour de ses parties prenantes. Nos solutions d’audits RSE pour toutes les tailles d’entreprises permettent d’évaluer la performance de ces critères"
          buttonText="Je découvre les audits RSE"
        />
      </div>
    </section>
  );
};

export default IntoSection;
