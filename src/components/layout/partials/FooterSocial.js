import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >

      <div className="container-sm pt-24">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="pt-16 pl-8 pr-24 cursor-pointer">
            <a target="_blank" href="https://t.me/bonkbankportal">
              <Image
                src={require('./../../../assets/images/links/telegram.svg')}
                alt="Telegram"
                width={38}
                height={38} />
            </a>
          </div>
          <div className="pt-16 pl-8 pr-24 cursor-pointer">
            <a target="_blank" href="https://pancakeswap.finance/swap?outputCurrency=0x766eeF40920F18d240EFd53D89D700D6FFb13cbD">
              <Image
                src={require('./../../../assets/images/links/pcs.svg')}
                alt="Pancake swap"
                width={38}
                height={38} />
            </a>
          </div>
          <div className="pt-16 pl-8 pr-24 cursor-pointer">
            <a target="_blank" href="https://poocoin.app/tokens/0x766eeF40920F18d240EFd53D89D700D6FFb13cbD">
              <Image
                src={require('./../../../assets/images/links/poocoin.svg')}
                alt="Poocoin"
                width={38}
                height={38} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSocial;