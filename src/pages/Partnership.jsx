import './partnership.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Trans, useTranslation } from 'react-i18next';

function Partnership() {
    const { t } = useTranslation();
    return (
        <>

            {/* 
            m1 - facet(slac)
            m2 - cern(awake)
            m3 - irkutsk
            m4 - novosibirsk
            m5 - nizhniy novgorod
            */}
            <h1>{t('partnership:partnership')}</h1>
            <p>{t('partnership:description')}</p>
            <div className='partnership-map'>
                <FaMapMarkerAlt className='marker m1' />
                <div className="description m1-description">
                    <h3>{t('partnership:standford')}</h3>
                    <p>
                        <Trans i18nKey={'partnership:standford_desc'}>
                            SLAC National Accelerator Laboratory<br />FACET experiment
                        </Trans>
                    </p>
                </div>
                <FaMapMarkerAlt className='marker m2' />
                <div className="description m2-description">
                    <h3>{t('partnership:geneva')}</h3>
                    <p>
                        <Trans i18nKey={'partnership:geneva_desc'}>
                            CERN<br />AWAKE experiment
                        </Trans>
                    </p>
                </div>
                <FaMapMarkerAlt className='marker m3' />
                <div className="description m3-description">
                    <h3>{t('partnership:irkutsk')}</h3>
                    <p>
                        <Trans i18nKey={'partnership:irkutsk_desc'}>
                            Irkutsk Supercomputer Center of the SB RAS
                        </Trans>
                    </p>
                </div>
                <FaMapMarkerAlt className='marker m4' />
                <div className="description m4-description">
                    <h3>{t('partnership:novosibirsk')}</h3>
                    <p>
                        <Trans i18nKey={'partnership:novosibirsk_desc'}>
                            Budker Institute of Nuclear Physics<br />
                            Institute of Laser Physics<br />
                            Novosibirsk State University
                        </Trans>
                    </p>
                </div>
                <FaMapMarkerAlt className='marker m5' />
                <div className="description m5-description">
                    <h3>{t('partnership:nizhniy')}</h3>
                    <p>
                        <Trans i18nKey={'partnership:nizhniy_desc'}>
                            XCELS experiment
                        </Trans>
                    </p>
                </div>
            </div>

        </>
    );
}

export default Partnership;