
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-wrapper">
      <Skeleton height={40} width={`100%`} baseColor='#C7C8CC'/>
    </div>
  );
};

export default SkeletonLoader;
