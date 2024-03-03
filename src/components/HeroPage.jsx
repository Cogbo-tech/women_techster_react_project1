import './HeroPage.css'
import './ButtonHero.css'
import { ButtonHero } from './ButtonHero';

export const HeroPage = () => {
    return (
        <section className="sectone">
            <div className="content">
                <h1>Get Premium free for one month</h1>
                <p>Just $119/month after. Debit and credit cards accepted. Cancel anytime.</p>
                <ButtonHero></ButtonHero>
                <small className="small"><a href="#">Terms and conditions apply. </a>
                    1 month free not available for users who have already tried Premium</small>
            </div>
        </section>

    )
}