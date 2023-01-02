import s from './history.module.css';
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';

/* const Odometer = dynamic(import('react-odometerjs'), {
    ssr: false,
    loading: number => <div className={s.loading}>{0}</div>,
}); */

export default function History() {
    /* const [odometerValue, setOdometerValue] = useState(0);

    useEffect(() => {
        setTimeout(() => {
        setOdometerValue(30);
        }, 1000);
    }, []); */

    return (
        <div className={s.history}>
            <div className={s.banner}>
                <div className={s.bannertext}>History</div>
                <div className={s.footnote}>footnote</div>
            </div>
            <div className={s.brief}>
                <div className={s.title}>
                    Company History
                </div>
                <p className={s.bio}>
                Founded in 2020, during the height of the COVID-19 pandemic, Liquid Barrier, LLC is a New York area-based writing and social media/digital management consultancy providing unique communication solutions to busy entrepreneurs and dynamic small and medium-sized companies.
                <br/>
                <br/>
                While Liquid Barrier is particularly focused on serving women- and minority-owned businesses, the company is open to providing services to all small, medium, and large businesses.
                <br/>
                <br/>
                Frank Bryant, Liquid Barriers CEO and founder, relies on his 20+ years as a professional technical writer, business analyst, and project manager to inspire Liquid Barrier to exceed client expectations.
                </p>
            </div>
            <div className={s.statistics}>
                <div className={s.title}>
                    Historical Statistics
                </div>
                <div className={s.stats}>
                    <div className={s.stat}>
                        <div className={s.num}>
                            {/* <Odometer value={odometerValue}
                                format="(,ddd)"
                                theme="default"/> */}30+
                        </div>
                        <div className={s.value}>
                            Satisfied Clients
                        </div>
                    </div>
                    <div className={s.stat}>
                        <div className={s.num}>
                            {/* <Odometer value={odometerValue}
                                format="(,ddd)"
                                theme="default"/> */}30+
                        </div>
                        <div className={s.value}>
                            Completed Projects
                        </div>
                    </div>
                    <div className={s.stat}>
                        <div className={s.num}>
                            700+
                        </div>
                        <div className={s.value}>
                            Linkedin Followers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}