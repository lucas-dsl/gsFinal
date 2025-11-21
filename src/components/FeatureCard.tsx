import type { Feature } from '../types/feature';

interface FeatureCardProps {
    feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
    const { icon: Icon, iconColorClass, iconBgClass, title, description } = feature;


    return (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 w-full transform transition duration-300 hover:shadow-xl">


            <div className={`${iconBgClass} flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0`}>
                <Icon className={`w-6 h-6 ${iconColorClass}`} />
            </div>


            <div className="flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-600 text-base">{description}</p>
            </div>
        </div>
    );
};


export default FeatureCard;