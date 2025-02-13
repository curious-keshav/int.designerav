import FlipbookContainer from '@/components/work/FlipbookContainer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { CldImage } from 'next-cloudinary';
import flipbookImagesData from '@/components/work/flipbookImagesDataCDN';

// export async function getStaticPaths() {
//   const projectIds = Object.keys(flipbookImagesData.projects);
//   console.log("Available projects:", projectIds);

//   const paths = projectIds.map((projectId) => ({
//     params: { id: projectId }, 
//   }));

//   console.log("Generated paths:", paths);

//   return {
//     paths,
//     fallback: "blocking",
//   };
// }


// export async function getStaticProps({ params }) {
//   console.log("Fetching data for ID:", params.id);
//   console.log("Available projects:", Object.keys(flipbookImagesData.projects));

//   // const product = flipbookImagesData.projects[params.id] || null;
//   const product = flipbookImagesData.projects[params.id] || null;
//   console.log(params.id,"Keshavvv");

//   if (!product) {
//     console.log("❌ Product not found for ID:", params.id);
//     return { notFound: true };
//   }

//   return {
//     props: { product },
//     revalidate: 10,
//   };
// }

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
    <div className='bg-[#1a1b1b] flex flex-col'>
      <div className='col-span-12 '>
        <div className='flex justify-center'>
          <FlipbookContainer
            id={id}
            isPortrait={isMobile || isPotraitMode}
            isMobile={isMobile}
          />
        </div>

        <div className="border border-gray-800 flex flex-col gap-6  m-8 bg-[#0D0D0D] !p-12 md:!p-4  md:!pt-8 h-fit rounded-2xl shadow-xl">
          <h2 className="text-xl md:text-sm font-bold text-white text-center">
            YOU MAY ALSO LIKE
          </h2>

          <div className="">
            <div className="flex gap-3 md:gap-6 overflow-x-auto py-2 px-2 scrollbar-hide scroll-smooth snap-x">
              {Object.entries(flipbookImagesData.projects).map(([projectId, images]) => (
                <div key={projectId} className="snap-start shrink-0 w-[16rem] md:w-[8rem] transition-transform transform hover:scale-105">
                  <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl" >
                    <CldImage
                      src={images[0]}
                      alt={`Project ${projectId}`}
                      className="w-[15rem] h-[11rem] md:w-[8rem] md:h-[5rem] object-cover rounded-xl"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw,33vw"
                      width={350}
                      height={220}
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  <div className="mt-2 md:mt-3 text-center text-white font-medium mb-4 text-sm md:text-base">
                    {projectId.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;


// href={`/work/${projectId[7]}`}