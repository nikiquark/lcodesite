
import { useTranslation } from "react-i18next";
import './Team.css'
const public_uri = process.env.PUBLIC_URL;


function Team(){
    const {t} = useTranslation();
    const peoples = [
        {
            name: t('team:lotov'),
            email: 'K.V.Lotov@inp.nsk.su',
            post: t('team:supervisor'),
            url: `${public_uri}/team/lotov_kv.jpg`,
            desc: t('team:lotov_desc'),
        },
        {
            name: t('team:minakov'),
            email: 'V.A.Minakov@inp.nsk.su',
            post: t('team:researcher'),
            url: `${public_uri}/team/minakov_va.jpg`,
            desc: t('team:minakov_desc'),
        },
        {
            name: t('team:tuev'),
            email: 'P.V.Tuev@inp.nsk.su',
            post: t('team:developer'),
            url: `${public_uri}/team/tuev_pv.jpg`,
            desc: t('team:tuev_desc'),
        },
        {
            name: t('team:spitsyn'),
            email: 'R.I.Spitsyn@inp.nsk.su',
            post: t('team:researcher'),
            url: `${public_uri}/team/spitsyn_ri.jpg`,
            desc: t('team:spitsyn_desc'),
        },
        {
            name: t('team:hudyakov'),
            email: 'vhudyakov12@gmail.com',
            post: t('team:researcher'),
            url: `${public_uri}/team/hudyakov_vk.jpg`,
            desc: t('team:hudyakov_desc'),
        },
        {
            name: t('team:shalimova'),
            email: 'ias@osmf.sscc.ru',
            post: t('team:researcher'),
            url: `${public_uri}/team/shalimova_ia.jpg`,
            desc: t('team:shalimova_desc'),
        },
        {
            name: t('team:yarygova'),
            email: 'v.yarygova@g.nsu.ru',
            post: t('team:researcher'),
            url: `${public_uri}/team/yarygova_vm.jpg`,
            desc: t('team:yarygova_desc'),
        },
        {
            name: t('team:okhotnikov'),
            email: 'n.okhotnikov@g.nsu.ru',
            post: '???',
            url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU`,
            desc: t('team:okhotnikov_desc'),
        },
        {
            name: t('team:kargapolov'),
            email: 'i.kargapolov@g.nsu.ru',
            post: t('team:developer'),
            url: `${public_uri}/team/kargapolov_iy.jpg`,
            desc: t('team:kargapolov_desc'),
        },
        {
            name: t('team:dorozhkina'),
            email: 'test@g.nsu.ru',
            post: t('team:researcher'),
            url: `https://www.kindpng.com/picc/m/695-6955645_female-user-female-user-icon-png-transparent-png.png`,
            desc: t('team:dorozhkina_desc'),
        },
    ]
    return (
        <>
            <h1 className="team-h1">{t('team:team')}</h1>
            <div className="card-holder">
                {peoples.map((x, i)=><div className="card" key={x.name} style={{animationDelay: `${i/5}s`}}>
                    <div className="ava" style={{backgroundImage: `url(${x.url})`}}></div>
                    <div className="overlay">
                        <h3>{x.post}</h3>
                        <h4>{x.name}</h4>
                        <p className='email'>{x.email}</p>
                        <p className='card-description'>{x.desc}</p>
                    </div>
                </div>)}                
            </div>
        </>
    );
}

export default Team;