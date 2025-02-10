import FlipbookContainer from '@/components/work/FlipbookContainer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductPage = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;
  const [isMobile, setIsMobile] = useState(false);
  const [isPotraitMode, setIsPotraitMode] = useState(false);

  useEffect(() => {
    const updateScreenOrientation = () => {
        const isPortrait = window.innerHeight > window.innerWidth;
        setIsMobile(window.innerWidth <= 768);
        setIsPotraitMode(isPortrait);
    };

    updateScreenOrientation();

    window.addEventListener('resize', updateScreenOrientation);
    return () => {
        window.removeEventListener('resize', updateScreenOrientation);
    };
}, []);


  return (
    <div className='bg-[#1a1b1b]'>
       <div className='col-span-12 '>
            <div className='flex justify-center'>
                <FlipbookContainer 
                id={id}
                isPortrait={isMobile || isPotraitMode}
                isMobile={isMobile}
                />
            </div>
        </div>
    </div>
  );
};

export default ProductPage;
