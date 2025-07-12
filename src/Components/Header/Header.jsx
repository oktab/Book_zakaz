import { Link } from 'react-router';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import { FaUser } from "react-icons/fa";
import { Menubar } from 'primereact/menubar';

import eng from './../../assets/img/eng.png';
import rus from './../../assets/img/rus.png';
import uzb from './../../assets/img/uzb.png';
import logo from './../../assets/img/logo.png';

const langOptions = [
  { value: 'uz', label: <div className="flex items-center gap-2"><img src={uzb} alt="O'zbekcha" className="w-6 h-6 rounded-full" /><span>O’zbekча</span></div> },
  { value: 'en', label: <div className="flex items-center gap-2"><img src={eng} alt="English" className="w-6 h-6 rounded-full" /><span>English</span></div> },
  { value: 'ru', label: <div className="flex items-center gap-2"><img src={rus} alt="Русский" className="w-6 h-6 rounded-full" /><span>Русский</span></div> }
];

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="bg-[#1E3A8A] h-[119px] fixed top-0 w-full z-50 shadow-md flex items-center">
      <div className="max-w-[1177px] mx-auto w-full flex justify-between items-center text-white font-inter">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="cursor-pointer"
            />
          </Link>
          <h1 className="text-2xl leading-tight">
            Tuproqqal’a tumani <br /> Axborot kutubxona <br /> markazi
          </h1>
        </div>

        <ul className="flex gap-8 text-2xl font-bold">
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/news">{t('news')}</Link></li>
          <li><Link to="/books">{t('books')}</Link></li>
          <li><Menubar model={items} /></li>



          {/* <details>
              <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer"><li className="cursor-pointer">{t('rahbariyat')}</li></summary>

              <div className='bg-[#1E3A8A] border border-white w-[212px] h-[84px] rounded-[10px] absolute top-[80px] pl-[10px] pt-[6px]'>
                  <li>AKM</li>
                  <hr className='w-[100%] absolute left-0 border-white'/>
                  <li><Link to="/managment">Rahbariat</Link></li>
              </div>
          </details> */}
        </ul>

        <div className="min-w-[160px]">
          <Select
            options={langOptions}
            defaultValue={langOptions.find(opt => opt.value === i18n.language)}
            onChange={(selectedOption) => i18n.changeLanguage(selectedOption.value)}
            className="text-black font-inter"
            isSearchable={false}
            styles={{
              control: (base) => ({ ...base, backgroundColor: '#1E3A8A', borderColor: 'white', color: 'white' }),
              singleValue: (base) => ({ ...base, color: 'white' }),
              menu: (base) => ({ ...base, backgroundColor: '#1E3A8A', color: 'white' }),
              option: (base, state) => ({ ...base, backgroundColor: state.isFocused ? '#3B82F6' : '#1E3A8A', color: 'white', cursor: 'pointer' }),
            }}
          />
        </div>
        <div className='w-[50px] h-[50px] border rounded-[10px] flex justify-center items-center'>
          <Link to="/signin"><FaUser /></Link>
        </div>
      </div>
    </header>

  );
};

export default Header;
