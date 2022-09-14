import * as React from 'react'
import cs from 'classnames'

import * as config from 'lib/config'

import styles from './PageProfile.module.css'
import socialStyles from './PageSocial.module.css'
import { socialLinks } from './PageSocial'
import Image from 'next/image'
import { useDarkMode } from 'lib/use-dark-mode'

export const PageProfile: React.FC = () => {
    const { isDarkMode } = useDarkMode()
    
    return (
        <div className={cs({'dark-mode': isDarkMode}, styles.pageProfile)}>
            <div className={styles.profileWrapper}>
                <Image
                    className={styles.profileAvatar}
                    src={config.profileAvatar}
                    width="192px"
                    height="192px"
                // layout='fill'
                />
            </div>
            <div className={styles.profileBadge}>
                <img
                    src="https://img.shields.io/badge/IEEE%20Student%20Fellow-00629B?style=flat-square?logoWidth=150" alt="badge" />
                <img
                    src="https://img.shields.io/badge/Bilibili%20Lv.5%20大会员-00A1D6?style=flat-square&logo=bilibili&logoColor=white"
                    alt="badge" />
            </div>
            <div className={styles.profileAddress} dangerouslySetInnerHTML={{__html: config.address}}>
                {/* <p>{config.address}</p> */}
            </div>

            {/* <PageSocial clasName="xxx" /> */}
            {/* <div className={socialStyles.pageSocial + ' ' + styles.socialIcons} style={socialIcons}> */}
            <div className={socialStyles.pageSocial + ' ' + styles.socialIcons}>
                {socialLinks.map((action) => (
                    <a
                        className={cs(socialStyles.action, socialStyles[action.name])}
                        href={action.href}
                        key={action.name}
                        title={action.title}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div className={socialStyles.actionBg}>
                            <div className={socialStyles.actionBgPane} />
                        </div>

                        <div className={socialStyles.actionBg}>{action.icon}</div>
                    </a>
                ))}
            </div>

            <div className={styles.profileMemo}>
                <p>{config.memo}</p>
            </div>
            <div className={styles.profileAudioPlayer}>
                <audio controls loop src={config.media}>
                    Your browser does not support the <code>audio</code> element.
                </audio>
            </div>

        </div>
    )
}
