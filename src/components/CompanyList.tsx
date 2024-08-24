
import companyImage1 from '../assets/company-1.png'
import companyImage2 from '../assets/company-2.png'
import companyImage3 from '../assets/company-3.png'
import companyImage4 from '../assets/company-4.png'
import companyImage5 from '../assets/company-5.png'

const companyImages = [
    { id: 1, image: companyImage1 },
    { id: 2, image: companyImage2, },
    { id: 3, image: companyImage3, },
    { id: 4, image: companyImage4 },
    { id: 5, image: companyImage5 },
    { id: 6, image: companyImage1 },
    { id: 7, image: companyImage2, },
    { id: 8, image: companyImage3, },
    { id: 9, image: companyImage4 },
    { id: 10, image: companyImage5 }
]



export const CompanyList = () => {
    return (
        <ul className="company-list slider">
            {
                companyImages.map(({ id, image }) => (
                    <li key={id} className='company-list-item'>
                        <img src={image} alt="Company Logo" width={100}  />
                    </li>
                ))
            }
        </ul>
    )
}