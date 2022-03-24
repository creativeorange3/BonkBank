import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class FeaturesTiles extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-tiles section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tiles-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: '',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/hammer.svg')}
                        alt="Bonk"
                        width={40}
                        height={40} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                     Bank Bonk!
                    </h4>
                    <p className="m-0 text-sm">
                      At the initial day of launch, every 30 minutes bank will be bonked.
                      One third of the Bank Bonk wallet will be given away each time for various challenges like biggest buy, random buy, first riddle solver, etc.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/flip.svg')}
                        alt="Play and Earn"
                        width={40}
                        height={40} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Flip the Bank!
                    </h4>
                    <p className="m-0 text-sm">
                      Flip the Bank is the game currently in progress where you will be able to either Bonk the Bank or Bank bonks you.
                      Game mechanics are similar to Coin Flip game where you have a 50% chance to win.
                      House profits from the game will be used as a buyback and will be burned.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/dao.svg')}
                        alt="DAO managed"
                        width={40}
                        height={40} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      DAO bonks
                    </h4>
                    <p className="m-0 text-sm">
                      Once we reach certain milestones, Bonk Bank will be DAO managed. Bank Bonk wallet will be used as a shared bank for all the community members.
                      That wallet will be used to gamble, to buy different projects community finds interesting, anything our degen loving community decides.
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div className={tilesClasses}>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;