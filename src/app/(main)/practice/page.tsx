import MultipleImageMagnifiers from './MultipleImageMagnifiers'
import MainImage from '../../../../public/assets/images/stair.jpg'

const Practice = ()=>{

    const images = [
        {
          src: MainImage,
          largeSrc:MainImage,
        },
        {
          src: MainImage,
          largeSrc:MainImage,
        },
        // Add more images as needed
      ];
    return<>
    <p>practice page</p>
    <div>
        <MultipleImageMagnifiers images={images} />
    </div>

    </>
    
}

export default Practice