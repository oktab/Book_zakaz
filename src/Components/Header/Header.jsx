import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import { FaUser } from "react-icons/fa";

import eng from './../../assets/img/eng.png';
import rus from './../../assets/img/rus.png';
import uzb from './../../assets/img/uzb.png';
import logo from './../../assets/img/logo.png';

const langOptions = [
  {
    value: 'uz',
    label: (
      <div className="flex items-center gap-2">
        <img src={uzb} alt="O'zbekcha" className="w-6 h-6 rounded-full" />
        <span>O’zbekча</span>
      </div>
    )
  },
  {
    value: 'en',
    label: (
      <div className="flex items-center gap-2">
        <img src={eng} alt="English" className="w-6 h-6 rounded-full" />
        <span>English</span>
      </div>
    )
  },
  {
    value: 'ru',
    label: (
      <div className="flex items-center gap-2">
        <img src={rus} alt="Русский" className="w-6 h-6 rounded-full" />
        <span>Русский</span>
      </div>
    )
  }
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    if (location.pathname !== '/akm' && location.pathname !== '/managment') {
      setSelectedOption('');
    }
  }, [location.pathname]);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    if (value === 'rahbariyat') {
      navigate('/managment');
    } else if (value === 'akm') {
      navigate('/akm');
    }
  };

  return (
    <header className="bg-[#1E3A8A] h-[119px] fixed top-0 w-full z-50 shadow-md flex items-center">
      <div className="max-w-[1177px] mx-auto w-full flex justify-between items-center text-white font-inter">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={logo} alt="Logo" className="cursor-pointer" />
          </Link>
          <h1 className="text-2xl leading-tight w-[210px]">
            Tuproqqal’a tumani Axborot kutubxona markazi
          </h1>
        </div>

        <ul className="flex gap-8 text-2xl font-bold items-center">
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/news">{t('news')}</Link></li>
          <li><Link to="/books">{t('books')}</Link></li>
          <li>
            <select
              id="bolim"
              name="bolim"
              value={selectedOption}
              onChange={handleSelectChange}
              className="text-white text-2xl font-inter bg-blue-900 rounded px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled hidden>{t('malumot')}</option>
              <option value="rahbariyat">{t('rahbariyat')}</option>
              <option value="akm">{t('akm')}</option>
            </select>
          </li>
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
              option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused ? '#3B82F6' : '#1E3A8A',
                color: 'white',
                cursor: 'pointer'
              }),
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
