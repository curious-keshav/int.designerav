import FlipbookContainer from '@/components/work/FlipbookContainer';
import { useRouter } from 'next/router';

const ProductPage = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className='bg-[#1a1b1b]'>
       <div className='col-span-12 '>
            <div className='flex justify-center'>
                <FlipbookContainer id={id}/>
            </div>
        </div>
    </div>
  );
};

export default ProductPage;
