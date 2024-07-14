import featureCardStyles from './FeatureCard.module.css'

const FeatureCard = ({data}) =>
{
    const {title, description} = data

    return(
        <div className={featureCardStyles.container}>
            <span className={featureCardStyles.title}>{title}</span>
            <p className={featureCardStyles.description}>{description}</p>
        </div>       
    )
}

export default FeatureCard